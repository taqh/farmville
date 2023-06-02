import { useContext, useState, useEffect } from 'react';
import Input from '../../components/ui/Input';
import UserContext from '../../context/UserContext';
// import { FcGoogle } from 'react-icons/fc';
// import { BsApple } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
   const { createAccount, loginStatus } = useContext(UserContext);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const [userInput, setUserInput] = useState({
      email: '',
      pasword: '',
      lastname: '',
      firstname: '',
   });

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
            pasword: e.target.value,
         }));
      }
   };

   const handleSignup = (e) => {
      e.preventDefault();
      setLoading(true);

      createAccount(userInput);
      setLoading(false);
   };
   useEffect(() => {
      loginStatus ? navigate('/login') : null;
   }, [navigate, loginStatus]);

   return (
      <div className='signup'>
         <div className='signup__header'>
            <h1>Sign up</h1>
            <small>create a new account</small>
         </div>
         <form className='signup__form' onSubmit={handleSignup}>
            <Input
               type='text'
               label='Firstname'
               id='firstname'
               onChange={handleChange}
               value={userInput.firstname}
            />
            <Input
               type='text'
               label='Lastname'
               id='lastname'
               onChange={handleChange}
               value={userInput.lastname}
            />
            <Input
               type='email'
               label='Email'
               id='email'
               onChange={handleChange}
               value={userInput.email}
            />
            <Input
               type='password'
               label='Password'
               id='password'
               pass='true'
               onChange={handleChange}
               value={userInput.value}
            />
            <Input
               type='password'
               label='Confirm Password'
               id='confirm'
               pass='true'
            />
            <button className='signup__form-btn'>Sign up</button>
         </form>
         <div className='signup__alt'>
            <span></span>
            <p className='continue'>Or Continue with</p>
            <span></span>
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
   );
}

export default SignUp;
