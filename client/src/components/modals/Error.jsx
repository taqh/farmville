import Modal from "./Modal"
import { useContext } from "react";
import { Link } from "react-router-dom"
import ModalContext from '../../context/ModalContext';

function Error() {
   const { closeModal } = useContext(ModalContext);

  return (
   <Modal>
      <div className='success'>
         <h1 className='success__heading'>An error occured</h1>
         <p className='success__text'>Check your connection, then try again</p>
         <Link to='/login' onClick={closeModal} className='success__redirect'>
            Go To Login
         </Link>
      </div>
   </Modal>
  )
}

export default Error