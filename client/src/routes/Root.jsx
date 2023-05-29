import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';

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
      </>
   );
}

export default RootLayout;
