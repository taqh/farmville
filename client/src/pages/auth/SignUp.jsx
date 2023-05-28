import { useContext, useState } from 'react';
import Input from '../../components/ui/Input';
import UserContext from '../../context/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SignUp() {
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
          <h1>Sign up</h1>
          <small>create a new account</small>
       </div>
       <form className='login__form'>
          <Input type='email' label='Email' id='email' />
          <Input type='password' label='Password' id='password' />
          <Input type='password' label='Confirm Password' id='password' />
          <button className='login__form-btn' onClick={handleSubmit}>
             Sign up
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
       <div className='login__link'>
          <p>Have an account?</p>
          <Link to='/login'>Login</Link>
       </div>
    </div>
 );
}

export default SignUp