import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';

function RootLayout() {
   const location = useLocation();
   const isLoggingIn = location.pathname.substring(1) === 'login';

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
