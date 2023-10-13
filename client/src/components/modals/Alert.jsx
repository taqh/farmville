import { createPortal } from 'react-dom';
import { useContext } from 'react';
import ModalContext from '../../context/ModalContext';

const Alert = ({ children }) => {
   const { modalRef } = useContext(ModalContext);
   return createPortal(
      <div ref={modalRef}>{children}</div>,
      document.getElementById('portal')
   );
};

export default Alert;
