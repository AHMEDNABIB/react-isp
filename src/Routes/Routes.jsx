import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Packages from "../pages/Packages/Packages";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/packages",
				element: <Packages />,
			},
		],
	},
]);

export default router