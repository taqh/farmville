import { useRef } from 'react';
import ModalContext from './ModalContext';
import { useContext } from 'react';
import UserContext from './UserContext';

function ModalProvider({ children }) {
   const { signupSuccess, signupError } = useContext(UserContext);
   const modalRef = useRef();

   const showModal = () => {
      modalRef.current.showModal();
   };
   const showStatus = () => {
      modalRef.current?.show();
   };
   const hideModal = () => {
      modalRef.current.close();
   };

   const values = {
      modalRef: modalRef,
      openModal: showModal,
      closeModal: hideModal,
      showStatus: showStatus,
   };

   return (
      <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
   );
}

export default ModalProvider;
