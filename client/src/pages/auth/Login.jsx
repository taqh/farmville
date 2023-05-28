import { useContext, useState } from 'react';
import Input from '../../components/ui/Input';
import UserContext from '../../context/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

function Login() {
   const [userDetails, setUserDetails] = useState({
      email: '',
      pasword: '',
   });

   const { updateStatus } = useContext(UserContext);
   const handleSubmit = (e) => {
      e.preventDefault();

      updateStatus(userDetails);
   };
   return (
      <div className='login'>
         <div className='login__header'>
            <h1>Login</h1>
         </div>
         <form className='login__form'>
            <Input type='email' label='Email' id='email' />
            <Input type='password' label='Password' id='password' />
            <button className='login__form-btn' onClick={handleSubmit}>
               Sign in
            </button>
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
      </div>
   );
}

export default Login;
