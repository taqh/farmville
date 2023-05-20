import './stylesheets/main.scss';
import { createBrowserRouter, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RootLayout from './pages/RootLayout';
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
	return <BrowserRouter router={router} />;
}

export default App;
