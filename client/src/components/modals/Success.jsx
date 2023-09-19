import { Link } from 'react-router-dom';
import Modal from './Modal';

function Success({ onClick }) {
   return (
      <Modal>
         <div className='success'>
            <h1 className='success__heading'>SignUp Successful</h1>
            <p className='success__text'>You will be redirected soon</p>
         </div>
      </Modal>
   );
}

export default Success;
