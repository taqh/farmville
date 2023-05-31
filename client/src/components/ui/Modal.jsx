import { createPortal } from 'react-dom';

const Dialog = (props) => {
   return <dialog></dialog>;
};

function Modal({ children }) {
   return (
      <>{createPortal(<Dialog />, document.getElementById('overlay'))}</>
   );
}

export default Modal;
