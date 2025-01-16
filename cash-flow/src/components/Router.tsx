import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LINKS } from "../constants/links";
import { HomePage } from "./HomePage"
import { Personal } from "./Personal"
import { Business } from "./Business"
import { Savings } from "./Savings"
import { GetStarted } from "./GetStarted";
import { NotFoundPage } from "./NotFoundPage";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";


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
