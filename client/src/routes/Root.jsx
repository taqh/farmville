import { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Footer from '../components/landmark/Footer';
import Error from '../components/modals/Error';
import Success from '../components/modals/Success';
import Navigation from '../components/landmark/Navigation';
import ModalContext from '../context/ModalContext';

function RootLayout() {
   const { pathname } = useLocation();
   const path = pathname.substring(1);
   const isLoggingIn = path === 'login' || path === 'register';
   const { signupSuccess, signupError } = useContext(UserContext);
   const { showStatus, closeModal } = useContext(ModalContext);

   // if (signupSuccess || signupError) {
   //    showStatus();
   // } 

   // useEffect(() => {
   //    const timer = setTimeout(() => {
   //       closeModal();
   //    }, 3000);
   //    return () => clearTimeout(timer);
   // }, [signupSuccess, closeModal])

   return (
      <>
         {signupSuccess && <Success />}
         {signupError && <Error />}
         {!isLoggingIn && <Navigation />}
         <main>
            <Outlet />
         </main>
         {!isLoggingIn && <Footer />}
      </>
   );
}

export default RootLayout;
