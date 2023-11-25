import React from "react";
import { FaBook, FaShoppingBasket } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { IoMdBusiness } from "react-icons/io";
import { MdCable, MdLabel, MdOutlineAddBusiness } from "react-icons/md";
import { TbWorld } from "react-icons/tb";


const Services = () => {
	return (
		<div>
			<div className="hero h-[800px] bg-[#fff]">
				<div className="hero-content flex-col">
					<div className="items-center">
						<h1 className="text-5xl font-bold text-center">
							Our Featured Services That We Provide
						</h1>

						<p className="py-6 text-center">
							Different Types of Services Stargate Communications
							Ltd Provide
						</p>
					</div>

					

					<progress className="progress progress-primary bg-[#878be7] w-56 mb-10 "></progress>

					<div className="flex flex-row   ">
						{/* 1 */}
						<div className="mx-5">
							<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#878be7]  duration-1000 transform hover:scale-110 ">
								<figure className="mt-8">
									<TbWorld className="text-primary text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center ">
									<h2 className="card-title ">
										Wholesale Internet
									</h2>
								</div>
							</div>
							<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#878be7]  duration-1000 transform hover:scale-110 ">
								<figure className="mt-6">
									<FaBook className="text-primary text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center ">
									<h2 className="card-title ">
										Educational Institute
									</h2>
								</div>
							</div>
						</div>

						{/* 2 */}

						<div className="mx-5">
							<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#878be7]  duration-1000 transform hover:scale-110 ">
								<figure className="mt-6">
									<HiHomeModern className="text-primary text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center ">
									<h2 className="card-title ">
										Residential Internet
									</h2>
								</div>
							</div>

							<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#878be7]  duration-1000 transform hover:scale-110 ">
								<figure className="mt-6">
									<MdCable className="text-primary text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center ">
									<h2 className="card-title ">
										Dark Fiber Connectivity
									</h2>
								</div>
							</div>
						</div>

						{/* 3 */}

						<div className="mx-5">
							<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#878be7]  duration-1000 transform hover:scale-110 ">
								<figure className="mt-6">
									<IoMdBusiness className="text-primary text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center ">
									<h2 className="card-title ">
										Business Internet
									</h2>
								</div>
							</div>
							<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#878be7]  duration-1000 transform hover:scale-110 ">
								<figure className="mt-6">
									<FaShoppingBasket className="text-primary text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center ">
									<h2 className="card-title ">
										Broadband Reseller
									</h2>
								</div>
							</div>
						</div>

						{/* 4 */}
						<div className="mx-5">
							<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#878be7]  duration-1000 transform hover:scale-110 ">
								<figure className="mt-6">
									<MdOutlineAddBusiness className="text-primary text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center ">
									<h2 className="card-title ">SME</h2>
								</div>
							</div>
							<div className="card relative w-80 h-48 bg-base-100 shadow-xl mb-5 group hover:text-white hover:bg-[#878be7]  duration-1000 transform hover:scale-110 ">
								<figure className="mt-6">
									<MdLabel className="text-primary text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center ">
									<h2 className="card-title ">MPLS</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
