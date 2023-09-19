import { createPortal } from 'react-dom';
import { useContext } from 'react';
import ModalContext from '../../context/ModalContext';

const Modal = ({ children }) => {
   const { modalRef } = useContext(ModalContext);
   return createPortal(
      <dialog ref={modalRef}>{children}</dialog>,
      document.getElementById('portal')
   );
};

export default Modal;

