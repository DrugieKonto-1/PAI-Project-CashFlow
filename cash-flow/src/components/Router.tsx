import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Links } from "../constants/links";
import { HomePage } from "./HomePage"
import { Chuj } from "./Chuj"


const router = createBrowserRouter([
	{
		children: [
			{ 
        path: Links.CHUJ,
        element: <Chuj />
			},
      {
        path: Links.HOME,
        element: <HomePage />
      }
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
