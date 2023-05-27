import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RootLayout from './routes/Root';
import './stylesheets/main.scss';
import Error from './pages/Error';
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <Error />,
		children: [{ index: true, element: <LandingPage /> }],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
