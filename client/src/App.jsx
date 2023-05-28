import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import LoginPage from './pages/auth/Login';
import LandingPage from './pages/Landing';
import RootLayout from './routes/Root';
import Error from './pages/Error';
import './stylesheets/main.scss';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
         { index: true, element: <LandingPage /> },
         { path: '/login', element: <LoginPage /> },
      ],
   },
]);

function App() {
   return (
      <UserProvider>
         <RouterProvider router={router} />
      </UserProvider>
   );
}

export default App;
