import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Alert from './Alert';

function Success() {
   const { signupSuccess } = useContext(UserContext);

   return (
      <Alert>
         <div
            className={`snackbar ${
               signupSuccess ? 'snackbar--active' : 'snackbar--inactive'
            }`}
         >
            <p className='snackbar__text'>Signup successful</p>
         </div>
      </Alert>
   );
}

export default Success;
