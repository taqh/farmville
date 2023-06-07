import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalContext from '../../context/ModalContext';
import Success from '../../components/modals/Success';
import UserContext from '../../context/UserContext';
import Input from '../../components/ui/Input';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

function SignUp() {
   const { createAccount, loginStatus } = useContext(UserContext);
   const { openModal, closeModal } = useContext(ModalContext);
   const [loading, setLoading] = useState(false);
   const [isValid, setIsValid] = useState(true);
   const navigate = useNavigate();
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
               body: JSON.stringify(userInput),
            }
         );
         const status = await response.json();
         // if (status.ok) {
         //    console.log(status);
         // }
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

   const handleSignup = (e) => {
      e.preventDefault();
      signup();
      setLoading(true);

      createAccount(userInput);
      setLoading(false);
      //openModal();
   };
   useEffect(() => {
      loginStatus ? navigate('/login') : null;
      // navigating wont work i should toggle a success modal instead
   }, [navigate, loginStatus]);

   return (
      <>
         <Success onClick={closeModal} />
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
                  isValid={isValid}
               />
               <Input
                  type='text'
                  label='Lastname'
                  id='lastname'
                  isValid={isValid}
                  onChange={handleChange}
                  value={userInput.lastname}
               />
               <Input
                  type='email'
                  label='Email'
                  id='email'
                  isValid={isValid}
                  onChange={handleChange}
                  value={userInput.email}
               />
               <Input
                  type='password'
                  label='Password'
                  id='password'
                  pass='true'
                  isValid={isValid}
                  onChange={handleChange}
                  value={userInput.password}
               />
               <Input
                  type='password'
                  label='Confirm Password'
                  id='confirm'
                  pass='true'
                  isValid={isValid}
               />
               <button className='signup__form-btn' disabled={loading}>
                  {loading ? 'Creating account' : 'Sign up'}
               </button>
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
      </>
   );
}

export default SignUp;
