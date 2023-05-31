import { createContext } from 'react';

const ModalContext = createContext({
   modalRef: {},
   openModal: () => {},
   closeModal: () => {},
});

export default ModalContext;
