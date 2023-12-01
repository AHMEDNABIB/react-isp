import React from "react";
import { FaBook, FaShoppingBasket } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { IoMdBusiness } from "react-icons/io";
import {  MdOutlineAddBusiness } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {

	useEffect(() => {
		AOS.init({
			
		
			easing: "ease-in-sine",
			
		});
	}, []);
	return (
		<div className="hero py-12  bg-[#fff]">
			<div className="hero-content flex-col md:flex-col">
				<div className="items-center">
					<h1 className="text-5xl font-bold text-center">
						Our Featured Services That We Provide
					</h1>

					<p className="py-6 text-center">
						Different Types of Services Stargate Communications Ltd
						Provide
					</p>
				</div>

				<progress className="progress progress-primary bg-[#878be7] w-56 mb-10 "></progress>

				<div className="flex flex-row flex-wrap justify-center  w-fit   ">
					<div
						className="items-center text-center mx-10  mt-[-3] "
						data-aos="flip-left">
						<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#5f66bf]  duration-1000 transform hover:scale-110 ">
							<figure className="mt-8">
								<TbWorld className="text-[#5f66bf] text-6xl group-hover:text-white duration-1000  " />
							</figure>
							<div className="card-body items-center text-center ">
								<h2 className="card-title ">
									Wholesale Internet
								</h2>
							</div>
						</div>
					</div>
					<div
						className="items-center text-center mx-10  mt-[-3] "
						data-aos="flip-left">
						<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#5f66bf] duration-1000 transform hover:scale-110 ">
							<figure className="mt-6">
								<HiHomeModern className="text-[#5f66bf] text-6xl group-hover:text-white duration-1000  " />
							</figure>
							<div className="card-body items-center text-center ">
								<h2 className="card-title ">
									Residential Internet
								</h2>
							</div>
						</div>
					</div>
					<div
						className="items-center text-center mx-10  mt-[-3] "
						data-aos="flip-left">
						<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#5f66bf]  duration-1000 transform hover:scale-110 ">
							<figure className="mt-6">
								<IoMdBusiness className="text-[#5f66bf] text-6xl group-hover:text-white duration-1000  " />
							</figure>
							<div className="card-body items-center text-center ">
								<h2 className="card-title ">
									Business Internet
								</h2>
							</div>
						</div>
					</div>
					<div
						className="items-center text-center mx-10  mt-[-3] "
						data-aos="flip-left">
						<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#5f66bf]  duration-1000 transform hover:scale-110 ">
							<figure className="mt-6">
								<MdOutlineAddBusiness className="text-[#5f66bf] text-6xl group-hover:text-white duration-1000  " />
							</figure>
							<div className="card-body items-center text-center ">
								<h2 className="card-title ">SME</h2>
							</div>
						</div>
					</div>
					<div
						className="items-center text-center mx-10  mt-[-3] "
						data-aos="flip-left">
						<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#5f66bf] duration-1000 transform hover:scale-110 ">
							<figure className="mt-6">
								<FaBook className="text-[#5f66bf] text-6xl group-hover:text-white duration-1000  " />
							</figure>
							<div className="card-body items-center text-center ">
								<h2 className="card-title ">
									Educational Institute
								</h2>
							</div>
						</div>
					</div>

					<div
						className="items-center text-center mx-10  mt-[-3]  "
						data-aos="flip-left">
						<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#5f66bf] duration-1000 transform hover:scale-110 ">
							<figure className="mt-6">
								<FaShoppingBasket className="text-[#5f66bf] text-6xl group-hover:text-white duration-1000  " />
							</figure>
							<div className="card-body items-center text-center ">
								<h2 className="card-title ">
									Broadband Reseller
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
