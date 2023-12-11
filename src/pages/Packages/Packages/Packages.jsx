import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import image1 from "../../../assets/image/benefit.jpg";
import Heading from "../Heading/Heading";
import { IoMdCheckmark } from "react-icons/io";

const Packages = () => {
	const [toggle, setToggle] = useState(1);
	const { pathname } = useLocation();

	const handleNav = (index) => {
		setToggle(index);
	};

	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 500,
		});
	}, []);
	return (
		<div className=" min-h-screen  ">
			{/* heading */}
			<Heading />

			{/* tabs */}
			<div className="p-6">
				<h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 ">
					Internet Packages
				</h1>
				<div className="hero  ">
					<div className="hero-content text-center">
						<div className="w-[-100px]  my-10">
							<div className="flex h-10 flex-col mb-24 gap-3 md:flex-row lg:flex-row lg:mb-0 ">
								<Link
									onClick={() => handleNav(1)}
									to="/packages/home_internet"
									className={
										toggle === 1 && pathname
											? " bg-primary text-white btn btn-ghost w-44 p-4 mx-1 border-md  border-1 border-base-400 rounded-md  "
											: " bg-base-300 btn btn-ghost p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
									}>
									HOME INTERNET
								</Link>
								<Link
									onClick={() => handleNav(2)}
									to="/packages/corporate"
									className={
										toggle === 2
											? " bg-primary text-white btn btn-ghost w-44 p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
											: " bg-base-300 btn btn-ghost w-44 p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
									}>
									CORPORATE
								</Link>
								<Link
									onClick={() => handleNav(3)}
									to="/packages/sme"
									className={
										toggle === 3
											? " bg-primary text-white btn btn-ghost w-44  p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
											: " bg-base-300 btn btn-ghost w-44 p-4 mx-1  border-md  border-1 border-base-400 rounded-md"
									}>
									SME
								</Link>
								<Link
									onClick={() => handleNav(4)}
									to="/packages/ek_desh_ek_rate"
									className={
										toggle === 4
											? " bg-primary text-white btn btn-ghost w-44 p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
											: " bg-base-300 btn btn-ghost w-44  p-4 mx-1 border-md  border-1 border-base-400 rounded-md"
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

				<div className="hero max-h-full mt-10  ">
					<div className="hero-content flex-col lg:flex-row-reverse -mx-10">
						<img
							src={image1}
							className="w-[500px] h-[510px] shadow-2xl rounded-r-lg "
						/>
						
						<div className=" bg-white p-8 lg:w-96 w-[500px]  shadow-lg  overflow-hidden -mr-8 rounded-l-lg ">
							<h1 className="text-xl font-bold mb-5">BENEFITS</h1>
							<ul className="list-none ">
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>
									Optical Fiber Connectivity
								</li>
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>
									24/7 hours Support
								</li>
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>{" "}
									Smooth and seamless internet browsing
								</li>
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>
									Bufferless YouTube video
								</li>
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>
									Bufferless Facebook video
								</li>
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>
									BDIX NIX Connectivity{" "}
								</li>
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>
									Multiple Upstream
								</li>
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>
									Local CDN
								</li>
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>
									Connectivity through Public IP
								</li>
								<li className="py-2 flex items-center">
									<span className="px-2">
										<IoMdCheckmark />
									</span>
									Low latency
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Packages;
