import { Link } from 'react-router-dom';
import Modal from './Modal';
import { useContext } from 'react';
import ModalContext from '../../context/ModalContext';

function Success({ onClick }) {
   const { modalRef } = useContext(ModalContext);
   return (
      <Modal>
         <div className='success'>
            <h1 className='success__heading'>Thank you for your Registration</h1>
            <p className='success__text'>To start exploring please login</p>
            <Link to='/login' onClick={onClick} className='success__redirect'>
               Go To Login
            </Link>
         </div>
      </Modal>
   );
}

export default Success;
