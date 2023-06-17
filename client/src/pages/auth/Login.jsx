import { useContext, useState, useEffect } from 'react';
import Input from '../../components/ui/Input';
import UserContext from '../../context/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../components/loaders/Loader';

function Login() {
   const { accessAccount, userData } = useContext(UserContext);
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const [formIsValid, setFormIsValid] = useState(false);
   const [emailIsValid, setEmailIsValid] = useState(true);
   const [emailTouched, setEmailTouched] = useState(false);
   const [passwordIsValid, setPasswordIsValid] = useState(true);
   const [passwordTouched, setPasswordTouched] = useState(false);

   const navigate = useNavigate();
   const [userInput, setUserInput] = useState({
      email: '',
      password: '',
   });

   const handleChange = (e) => {
      const { name, value } = e.target;

      if (name === 'email') {
         setUserInput((prevState) => ({
            ...prevState,
            email: value,
         }));
      } else {
         setUserInput((prevState) => ({
            ...prevState,
            password: value,
         }));
      }
   };
   const emailBlurHandler = () => {
      setEmailTouched(true);
   };
   const passwordBlurHandler = () => {
      setPasswordTouched(true);
   };
   useEffect(() => {
      if (passwordIsValid && emailIsValid) {
         setFormIsValid(true);
      }
      return () => {};
   }, [emailIsValid, passwordIsValid]);

   useEffect(() => {
      if (
         emailTouched &&
         userInput.email.trim() === '' &&
         !userInput.email.includes('@')
      ) {
         setEmailIsValid(false);
      } else {
         setEmailIsValid(true);
         setEmailTouched(false);
      }

      if (passwordTouched && userInput.password.trim() === '') {
         setPasswordIsValid(false);
      } else {
         setPasswordIsValid(true);
         setPasswordTouched(false);
      }

      return () => {};
   }, [emailTouched, userInput.email, passwordTouched, userInput.password]);

   const login = async () => {
      try {
         const response = await fetch(
            'https://serverside-c96b.onrender.com/users/login',
            {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(userInput),
            }
         );
         const data = await response.json();
         if (response.ok) {
            console.log(data);
            setSuccess(true);
         }
      } catch (error) {
         console.error('Error:', error);
      }
   };

   const handleLogin = (e) => {
      e.preventDefault();

      if (formIsValid) {
         setLoading(true);
         login();
      }
      if (success) {
         accessAccount(userInput);
         setLoading(false);
      }
   };

   useEffect(() => {
      userData.loginStatus ? navigate('/explore') : null;
   }, [navigate, userData.loginStatus]);

   return (
      <div className='login'>
         <div className='login__header'>
            <h1>Login</h1>
            <small>login to your account</small>
         </div>
         <form className='login__form' onSubmit={handleLogin}>
            <Input
               type='email'
               label='Email'
               id='email'
               isValid={emailIsValid}
               onChange={handleChange}
               value={userInput.email}
               onBlur={emailBlurHandler}
               errorMessage={!emailIsValid ? 'Please enter a valid email' : ''}
            />
            <Input
               type='password'
               label='Password'
               id='password'
               pass='true'
               isValid={passwordIsValid}
               onChange={handleChange}
               value={userInput.password}
               onBlur={passwordBlurHandler}
               errorMessage={!passwordIsValid ? 'Required' : ''}
            />
            <button className='login__form-btn' disabled={loading}>
               {loading && <Spinner />}
               {loading ? 'logging in' : 'Log in'}
            </button>
         </form>
         <div className='login__alt'>
            <span></span>
            <p className='continue'>Or Continue with</p>
            <span></span>
         </div>
         <div className='login__options'>
            <button className='option'>
               <FcGoogle aria-hidden='true' />
               Google
            </button>
            <button className='option'>
               <BsApple aria-hidden='true' />
               Apple
            </button>
         </div>
         <div className='signup__link'>
            <p>New user?</p>
            <Link to='/register'>Create Account</Link>
         </div>
      </div>
   );
}

export default Login;
