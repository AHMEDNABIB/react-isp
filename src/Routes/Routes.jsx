import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import HomeInternet from "../pages/Packages/HomeInternet/HomeInternet";
import Packages from "../pages/Packages/Packages/Packages";
import Corporate from "../pages/Packages/Corporate/Corporate";
import EkDesh from "../pages/Packages/EkDesh/EkDesh";
import SME from "../pages/Packages/SME/SME";
import About from "../pages/About/About/About";

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
				path: "packages",
				element: <Packages />,
				children: [
					{
						path: "home_internet",
						element: <HomeInternet />,
					},
					{
						path: "corporate",
						element:<Corporate/>
					},
					{
						path: "sme",
						element:<SME/>
					},
					{
						path: "ek_desh_ek_rate",
						element: <EkDesh/>
					}

				],
			},
			{
				path: 'about',
				element:<About/>
			}
		],
	},
]);

export default router;
