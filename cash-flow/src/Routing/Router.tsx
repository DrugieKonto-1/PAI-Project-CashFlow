import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LINKS } from "../constants/links";
import { HomePage } from "../components/HomePage"
import { Personal } from "../components/Personal"
import { Business } from "../components/Business"
import { Savings } from "../components/Savings"
import { GetStarted } from "../components/GetStarted";
import { NotFoundPage } from "../components/NotFoundPage";
import { LoginPage } from "../components/LoginPage";
import { RegisterPage } from "../components/RegisterPage";

// Routing
const router = createBrowserRouter([
	{
		children: [
			{
				path: '*',
				element: <NotFoundPage />,
			},
      {
        path: LINKS.HOME,
        element: <HomePage />
      },
			{ 
        path: LINKS.PERSONAL,
        element: <Personal />
			},			{ 
        path: LINKS.BUSINESS,
        element: <Business />
			},			{ 
        path: LINKS.SAVINGS,
        element: <Savings />
			},
			{
				path: LINKS.GETSTARTED,
				element: <GetStarted />
			},
			{
				path: LINKS.LOGINPAGE,
				element: <LoginPage />
			},
			{
				path: LINKS.REGISTERPAGE,
				element: <RegisterPage />
			},

		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
