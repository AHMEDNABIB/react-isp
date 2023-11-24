import React from "react";
import logo from "../../../../public/stargate.svg";

const Navbar = () => {
	const navItems = (
		<>
			<li>
				<a className="text-base font-base  hover:text-primary ">HOME</a>
			</li>

			{/* <li tabIndex={0}>
				<details className="text-base    ">
					<summary className="text-base font-base  hover:text-[#5ca8ce] ">
						Services
					</summary>
					<ul className="p-2  w-40 ">
						<li>
							<a className="text-base font-base  hover:text-[#5ca8ce] ">
								Home Internet
							</a>
						</li>
						<li>
							<a className="text-base font-base  hover:text-[#5ca8ce] ">
								Corporate
							</a>
						</li>
						<li>
							<a className="text-base font-base  hover:text-[#5ca8ce] ">
								SME
							</a>
						</li>
					</ul>
				</details>
			</li> */}

			<li>
				<a className="text-base font-base  hover:text-primary ">
					INTERNET PACKAGES
				</a>
			</li>

			<li>
				<a className="text-base font-base  hover:text-primary ">
					COVERAGE
				</a>
			</li>
			<li>
				<a className="text-base font-base  hover:text-primary ">
					PAY BILL
				</a>
			</li>
			<li>
				<a className="text-base font-base  hover:text-primary">OFFER</a>
			</li>
			<li>
				<a className="text-base font-base  hover:text-[#5ca8ce] ">
					ABOUT US
				</a>
			</li>
			<li>
				<a className="text-base font-base  hover:text-[#5ca8ce] ">
					CONTACT US
				</a>
			</li>
		</>
	);

	return (
		<div className="navbar bg-base-100 flex items-center justify-center  ">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						{navItems}
					</ul>
				</div>

				<img src={logo} className=" w-52 h-16" alt="" />
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navItems}</ul>
			</div>

			<div className="navbar-end">
				<button className="  btn btn-primary mr-5 ">SELF CARE</button>
			</div>
		</div>
	);
};

export default Navbar;
