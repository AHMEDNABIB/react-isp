import React from "react";
import { FaHeadset } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LiaConnectdevelop } from "react-icons/lia";
import { PiBezierCurveLight } from "react-icons/pi";

const Features = () => {
	return (
		<div className="w-screen-5xl bg-base-200">
			<div className="hero py-12   ">
				<div className="hero-content flex-col md:flex-col">
					<div className="items-center max-w-5xl" data-aos="fade-up">
						<h1 className="text-5xl font-bold text-center ">
							Thrilling Features
						</h1>
						<p className="py-6 text-center">
							Visit Stargate Internet Systems right now to take
							advantage of our special features.
						</p>
					</div>

					<progress
						className="progress progress-primary bg-[#878be7] w-56 mb-10 "
						data-aos="fade-up"></progress>

					<div className="flex flex-row flex-wrap justify-center my-16  gap-5 w-fit ">
						<div
							className="items-center text-center    "
							data-aos="zoom-in">
							<div className="card w-96 bg-base-100 h-64 shadow-xl">
								<figure className="mt-6">
									<IoSpeedometerOutline className="text-[#5f66bf]  text-5xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										TRULY UNLIMITED BROADBAND
									</h2>
									<p>
										Stargate Internet offers Limitless
										Internet Service services.
									</p>
								</div>
							</div>
						</div>

						<div
							className="items-center text-center mx-5 "
							data-aos="zoom-in">
							<div className="card w-96 bg-base-100 h-64 shadow-xl">
								<figure className="mt-6">
									<IoIosPerson className="text-[#5f66bf]  text-5xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										STRONG CUSTOMER FOCUS
									</h2>
									<p>
										Stargate Internet constantly endeavors
										to promote client interest come what
										may.
									</p>
								</div>
							</div>
						</div>

						<div
							className="items-center text-center "
							data-aos="zoom-in">
							<div className="card w-96 h-64 bg-base-100 shadow-xl">
								<figure className="mt-6">
									<FaHeadset className="text-[#5f66bf]  text-5xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										LEGENDARY CUSTOMER SERVICE
									</h2>
									<p>
										Stargate Internetis almost synonymous
										with its top notch Customer Service
									</p>
								</div>
							</div>
						</div>

						<div
							className="items-center text-center "
							data-aos="zoom-in">
							<div className="card w-96 h-64 bg-base-100 shadow-xl">
								<figure className="mt-6">
									<GiNetworkBars className="text-[#5f66bf]  text-5xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										Stable Connection
									</h2>
									<p>
										Stargate Internet provides incredibly
										reliable and robust internet
										connectivity that is never interrupted.
									</p>
								</div>
							</div>
						</div>
						<div
							className="items-center text-center mx-5   mt-[-3] "
							data-aos="zoom-in">
							<div className="card w-96 h-64 bg-base-100 shadow-xl">
								<figure className="mt-6">
									<PiBezierCurveLight className="text-[#5f66bf]  text-5xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										Multiple Upstream
									</h2>
									<p>
										The request is sent by Stargate to many
										upstream servers.
									</p>
								</div>
							</div>
						</div>

						<div
							className="items-center text-center   mt-[-3]  "
							data-aos="zoom-in">
							<div className="card w-96 h-64 bg-base-100 shadow-xl">
								<figure className="mt-6">
									<LiaConnectdevelop className="text-[#5f66bf] text-5xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										Fiber Optic Network
									</h2>
									<p>
										Fast internet access is available to you
										with our fiber-optic network.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
