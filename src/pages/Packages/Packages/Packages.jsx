import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Packages = () => {
	const [toggle, setToggle] = useState(1);
	const { pathname } = useLocation();

	const handleNav = (index) => {
		setToggle(index);
	};
	return (
		<div className=" min-h-screen  ">
			<div className="p-6">
				<h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 ">
					Internet Packages
				</h1>
				<div className="hero  ">
					<div className="hero-content text-center">
						<div className="w-[-100px]  my-10">
							<div className="flex h-10  mx-[-120px] ">
								<Link
									onClick={() => handleNav(1)}
									to="/packages/home_internet"
									className={
										toggle === 1 && pathname
											? " bg-primary text-white btn btn-ghost p-4 mx-1 border-md  border-1 border-base-400 rounded-md "
											: " bg-base-300 btn btn-ghost p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
									}>
									HOME INTERNET
								</Link>
								<Link
									onClick={() => handleNav(2)}
									to="/packages/corporate"
									className={
										toggle === 2
											? " bg-primary text-white btn btn-ghost p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
											: " bg-base-300 btn btn-ghost p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
									}>
									CORPORATE
								</Link>
								<Link
									onClick={() => handleNav(3)}
									to="/packages/sme"
									className={
										toggle === 3
											? " bg-primary text-white btn btn-ghost p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
											: " bg-base-300 btn btn-ghost p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
									}>
									SME
								</Link>
								<Link
									onClick={() => handleNav(4)}
									to="/packages/ek_desh_ek_rate"
									className={
										toggle === 4
											? " bg-primary text-white btn btn-ghost p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
											: " bg-base-300 btn btn-ghost p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
									}>
									EK DESH EK RATE
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="max-w-screen-xl mx-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Packages;
