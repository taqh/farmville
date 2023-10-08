import { useContext, useState, useEffect } from 'react';
import { Spinner } from '../../components/loaders/Loader';
import Success from '../../components/modals/Success';
import UserContext from '../../context/UserContext';
import Input from '../../components/ui/Input';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
   const { createAccount, loginStatus } = useContext(UserContext);
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const navigate = useNavigate();

   const [firstNameIsValid, setFirstNameIsValid] = useState(true);
   const [lastNameIsValid, setLastNameIsValid] = useState(true);
   const [passwordIsValid, setPasswordIsValid] = useState(true);
   const [passwordMatch, setPasswordMatch] = useState(true);
   const [emailIsValid, setEmailIsValid] = useState(true);

   const [firstNameTouched, setFirstNameTouched] = useState(false);
   const [lastNameTouched, setLastNameTouched] = useState(false);
   const [passwordTouched, setPasswordTouched] = useState(false);
   const [emailTouched, setEmailTouched] = useState(false);

   const [formIsValid, setFormIsValid] = useState(false);
   const [userInput, setUserInput] = useState({
      email: '',
      password: '',
      lastname: '',
      firstname: '',
   });

   const signup = async () => {
      try {
         const response = await fetch(
            'https://serverside-c96b.onrender.com/users/signup',
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
            createAccount(userInput);
            navigate('/login'); // Redirect to login page
         }
      } catch (error) {
         console.error('Error:', error);
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;

      if (name === 'firstname') {
         setUserInput((prevState) => ({
            ...prevState,
            firstname: value,
         }));
      } else if (name === 'lastname') {
         setUserInput((prevState) => ({
            ...prevState,
            lastname: value,
         }));
      } else if (name === 'email') {
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
   useEffect(() => {
      if (
         firstNameIsValid &&
         lastNameIsValid &&
         passwordIsValid &&
         emailIsValid &&
         passwordMatch
      ) {
         setFormIsValid(true);
      }

      return () => {};
   }, [
      firstNameIsValid,
      lastNameIsValid,
      emailIsValid,
      passwordIsValid,
      passwordMatch,
   ]);
   const [confirmValue, setConfirmValue] = useState('');

   const checkMatch = (e) => {
      const value = e.target.value;
      setConfirmValue(value);
      if (value === userInput.password) {
         setPasswordMatch(true);
      } else {
         setPasswordMatch(false);
      }
   };

   const firstNameBlurHandler = () => {
      setFirstNameTouched(true);
   };
   const lastNameBlurHandler = () => {
      setLastNameTouched(true);
   };
   const emailBlurHandler = () => {
      setEmailTouched(true);
   };
   const passwordBlurHandler = () => {
      setPasswordTouched(true);
   };

   useEffect(() => {
      if (firstNameTouched && userInput.firstname.trim() === '') {
         setFirstNameIsValid(false);
      } else {
         setFirstNameIsValid(true);
         setFirstNameTouched(false);
      }

      if (lastNameTouched && userInput.lastname.trim() === '') {
         setLastNameIsValid(false);
      } else {
         setLastNameIsValid(true);
         setLastNameTouched(false);
      }

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
   }, [
      firstNameTouched,
      userInput.firstname,
      userInput.lastname,
      lastNameTouched,
      emailTouched,
      userInput.email,
      passwordTouched,
      userInput.password,
   ]);

   // fix loigc
   const handleSignup = async (e) => {
      e.preventDefault();
      if (formIsValid) {
         setLoading(true);

         try {
            await signup();
            setLoading(false); // Set loading to false after signup attempt
         } catch (error) {
            setLoading(false); // Set loading to false if there was an error
            console.error('Error during signup:', error);
         }
      }
   };

   return (
      <>
         <div className='signup'>
            <div className='signup__header'>
               <h1>Sign up</h1>
               <small>create a new account</small>
            </div>
            <form className='signup__form' onSubmit={handleSignup}>
               <Input
                  type='text'
                  id='firstname'
                  label='Firstname'
                  onBlur={firstNameBlurHandler}
                  onChange={handleChange}
                  isValid={firstNameIsValid}
                  value={userInput.firstname}
                  errorMessage={
                     !firstNameIsValid ? 'Please enter a first name' : ''
                  }
               />
               <Input
                  type='text'
                  label='Lastname'
                  id='lastname'
                  isValid={lastNameIsValid}
                  onChange={handleChange}
                  value={userInput.lastname}
                  onBlur={lastNameBlurHandler}
                  errorMessage={
                     !lastNameIsValid ? 'Please enter a last name' : ''
                  }
               />
               <Input
                  type='email'
                  label='Email'
                  id='email'
                  isValid={emailIsValid}
                  onChange={handleChange}
                  value={userInput.email}
                  onBlur={emailBlurHandler}
                  errorMessage={
                     !emailIsValid ? 'Please enter a valid email' : ''
                  }
               />
               <Input
                  type='password'
                  label='Password'
                  id='password'
                  pass='true'
                  isValid={passwordIsValid}
                  onChange={handleChange}
                  onBlur={passwordBlurHandler}
                  value={userInput.password}
                  errorMessage={!passwordIsValid ? 'Required' : ''}
               />
               <Input
                  type='password'
                  label='Confirm Password'
                  id='confirm'
                  pass='true'
                  value={confirmValue}
                  isValid={passwordMatch}
                  onChange={checkMatch}
                  errorMessage={!passwordMatch ? 'Passwords do not match' : ''}
               />
               <button className='signup__form-btn' disabled={loading}>
                  {loading && <Spinner />}
                  {loading ? 'Creating account' : 'Sign up'}
               </button>
            </form>
            <div className='signup__alt'>
               <p className='continue'>Or Continue with</p>
            </div>
            <div className='signup__options'>
               <button className='option'>
                  <FcGoogle aria-hidden='true' />
                  Google
               </button>
               <button className='option'>
                  <BsApple aria-hidden='true' />
                  Apple
               </button>
            </div>
            <div className='login__link'>
               <p>Have an account?</p>
               <Link to='/login'>Login</Link>
            </div>
         </div>
      </>
   );
}

export default SignUp;
