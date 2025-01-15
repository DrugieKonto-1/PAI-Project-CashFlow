import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LINKS } from "../constants/links";
import { HomePage } from "./HomePage"
import { Page1 } from "./Page1"
import { Page2 } from "./Page2"
import { Page3 } from "./Page3"
import { NotFoundPage } from "./NotFoundPage";


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
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
