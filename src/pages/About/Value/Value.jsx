import React from "react";

import { FaUserAlt } from "react-icons/fa";
import {  FaHandshake,  } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiFileMagnifyingGlassFill } from "react-icons/pi";


import { HiUserGroup } from "react-icons/hi2";
const Value = () => {
	return (
		<div className="w-screen-5xl">
			<div className="hero py-12   bg-[#fff]">
				<div className="hero-content flex-col md:flex-col">
					<div className="items-center max-w-5xl">
						<h1 className="text-4xl font-bold text-center ">
							Our Values
						</h1>
					</div>

					<div
						className="flex flex-row flex-wrap justify-center  my-16  gap-5 w-fit "
						data-aos="zoom-out-right">
						<div className="items-center text-center    ">
							<div className="card w-96 bg-base-100 h-68 shadow-2xl py-14 hover:scale-110">
								<figure className="">
									<FaUserAlt className="text-[#5f66bf]  text-5xl " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="text-lg font-bold">
										CLIENT FOCUS
									</h2>
								</div>
							</div>
						</div>

						<div className="items-center text-center  mx-5   ">
							<div className="card w-96 bg-base-100 h-68 shadow-2xl py-14 hover:scale-110">
								<figure className="">
									<FaHandshake className="text-[#5f66bf] text-5xl  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="text-lg font-bold">
										COMMITMENT & ACCOUNTABILITY
									</h2>
								</div>
							</div>
						</div>

						<div className="items-center text-center   ">
							<div className="card w-96 bg-base-100 h-68 shadow-2xl py-14 hover:scale-110">
								<figure className="">
									<PiFileMagnifyingGlassFill className="text-[#5f66bf]  text-5xl   " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="text-lg font-bold">
										INTEGRITY & TRANSPARENCY
									</h2>
								</div>
							</div>
						</div>

						<div className="items-center text-center   ">
							<div className="card w-96  bg-base-100 h-68 shadow-2xl py-14 hover:scale-110 ">
								<figure className="">
									<HiOutlineLightBulb className="text-[#5f66bf]  text-5xl hover:scale-110  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="text-lg font-bold">
										INNOVATION & CHANGE
									</h2>
								</div>
							</div>
						</div>
						<div className="items-center text-center mx-5   mt-[-3] ">
							<div className="card w-96  bg-base-100 h-68 shadow-2xl py-14 hover:scale-110">
								<figure className="">
									<HiUserGroup className="text-[#5f66bf]  text-5xl   " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="text-lg font-bold">
										PEOPLE & TEAMWORK
									</h2>
								</div>
							</div>
						</div>

						<div className="items-center text-center   mt-[-3] ">
							<div className="card w-96 bg-base-100 h-68 shadow-2xl py-14 hover:scale-110 ">
								<figure className="">
									<IoIosStar className="text-[#5f66bf] text-5xl" />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="text-lg font-bold">
										EXCELLENCE
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Value;
