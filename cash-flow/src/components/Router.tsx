import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LINKS } from "../constants/links";
import { HomePage } from "./HomePage"
import { Page1 } from "./Page1"
import { Page2 } from "./Page2"
import { Page3 } from "./Page3"
import { GetStarted } from "./GetStarted";
import { NotFoundPage } from "./NotFoundPage";
import { Loginpage } from "./LoginPage";
import { Registerpage } from "./RegisterPage";


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
        path: LINKS.PAGE1,
        element: <Page1 />
			},			{ 
        path: LINKS.PAGE2,
        element: <Page2 />
			},			{ 
        path: LINKS.PAGE3,
        element: <Page3 />
			},
			{
				path: LINKS.GETSTARTED,
				element: <GetStarted />
			},
			{
				path: LINKS.LOGINPAGE,
				element: <Loginpage />
			},
			{
				path: LINKS.REGISTERPAGE,
				element: <Registerpage />
			},
			
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
