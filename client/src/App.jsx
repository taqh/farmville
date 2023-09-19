import './stylesheets/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import About from './pages/About';
import Market from './pages/Market';
import Details from './pages/Detail';
import Explore from './pages/Explore';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Service from './pages/Services';
import RootLayout from './routes/Root';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import UserProvider from './context/UserProvider';
import ModalProvider from './context/ModalProvider';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
         { index: true, element: <Landing /> },
         { path: '/login', element: <Login /> },
         { path: '/about', element: <About /> },
         { path: '/contact', element: <Contact /> },
         { path: '/explore', element: <Explore /> },
         { path: '/register', element: <SignUp /> },
         { path: '/services', element: <Service /> },
         { path: '/market', element: <Market /> },
         { path: '/market/:stall', element: <Details /> },
      ],
   },
]);

function App() {
   return (
      <UserProvider>
         <ModalProvider>
            <RouterProvider router={router} />
         </ModalProvider>
      </UserProvider>
   );
}

export default App;