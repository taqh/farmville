import ModalContext from '../../context/ModalContext';
import { createPortal } from 'react-dom';
import { useContext } from 'react';

const Dialog = ({ children }) => {
   const { modalRef } = useContext(ModalContext);
   return (
      <dialog ref={modalRef}>
         {children}
      </dialog>
   );
};

function Modal() {
   return <>{createPortal(<Dialog />, document.getElementById('portal'))}</>;
}

export default Modal;
