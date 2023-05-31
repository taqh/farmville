import { useRef } from 'react';
import ModalContext from './ModalContext';

function ModalProvider({ children }) {
   const modalRef = useRef();

   const showModal = () => {
      modalRef.current.showModal();
   };
   const hideModal = () => {
      modalRef.current.close();
   };

   const modal_values = {
      openModal: showModal,
      closeModal: hideModal,
      modalRef: modalRef,
   };
   return (
      <ModalContext.Provider value={modal_values}>
         {children}
      </ModalContext.Provider>
   );
}

export default ModalProvider;
