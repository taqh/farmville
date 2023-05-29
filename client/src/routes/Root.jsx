import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function RootLayout() {
   const { pathname } = useLocation();
   const path = pathname.substring(1);
   const isLoggingIn = path === 'login' || path === 'register';

   return (
      <>
         {!isLoggingIn && <Navigation />}
         <main>
            <Outlet />
         </main>
         {!isLoggingIn && <Footer />}
      </>
   );
}

export default RootLayout;
