import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Alert from './Alert';

function Error() {
   const { signupError } = useContext(UserContext);
  
   return (
      <Alert>
         <div
            className={`snackbar snackbar--error ${
               signupError ? 'snackbar--active' : 'snackbar--inactive'
            }`}
         >
            <p className='snackbar__text'>An error occured Please try again</p>
         </div>
      </Alert>
   );
}

export default Error;
