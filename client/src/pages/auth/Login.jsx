import { useContext, useState, useEffect } from 'react';
import Input from '../../components/ui/Input';
import UserContext from '../../context/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
   const { accessAccount, userData } = useContext(UserContext);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const [userInput, setUserInput] = useState({
      email: '',
      pasword: '',
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
            pasword: e.target.value,
         }));
      }
   };

   const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true);

      accessAccount(userInput);
      setLoading(false);
   };
   useEffect(() => {
      userData.loginStatus ? navigate('/home') : null;
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
               onChange={handleChange}
            />
            <Input
               type='password'
               label='Password'
               id='password'
               pass='true'
               onChange={handleChange}
            />
            <button className='login__form-btn'>{loading ? 'logging you in' : 'Log in'}</button>
         </form>
         <div className='login__alt'>
            <span></span>
            <p className='continue'>Or Continue with</p>
            <span></span>
         </div>
         <div className='login__options'>
            <button className='option'>
               <FcGoogle />
               Google
            </button>
            <button className='option'>
               <BsApple />
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
