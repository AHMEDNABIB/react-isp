import React from "react";
import { FaRegLifeRing, FaTools } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuRouter } from "react-icons/lu";

const Solution = () => {
	return (
		<>
			{" "}
			<div className="hero p-16">
				<div className="hero-content flex-col">
					<div className="items-center" data-aos="fade-up">
						<h1 className="text-4xl font-bold text-center">
							Why Choose Us
						</h1>

						<p className="py-6 text-center">
							Satisfaction Guaranteed Or Your Money Back!
						</p>
					</div>

					<progress
						className="progress progress-primary bg-[#878be7] w-56 mb-10 "
						data-aos="fade-up"></progress>

					<div className="flex flex-wrap mx-auto  justify-center w-fit">
						<div
							className="items-center text-center mx-10  "
							data-aos="fade-up-right"
							data-aos-easing="linear"
							data-aos-duration="1000">
							<div className="card">
								<figure className="mt-8 ">
									<IoSpeedometerOutline className="text-primary bg-[#bfc0f0]  p-4 rounded-full  text-6xl  " />
								</figure>
								<div className="mt-7">
									<h2 className="text-xl font-semibold">
										BEST SPEED
									</h2>
									{/* <p className="mt-3 text-base-400">
										Ometa Net provides super-fast Broadband
										connection for Home User on fiber and
										wireless. we believe in full
										satisfaction of customers
									</p> */}
								</div>
							</div>
						</div>

						<div
							className="items-center text-center mx-10  "
							data-aos="fade-up-right"
							data-aos-easing="linear"
							data-aos-duration="1000">
							<div className="card">
								<figure className="mt-8 ">
									<FaTools className="text-primary bg-[#bfc0f0]  p-4 rounded-full  text-6xl " />
								</figure>
								<div className="mt-7">
									<h2 className="text-xl font-semibold">
										FASTEST INSTALLATION & SETUP
									</h2>
									{/* <p className="mt-3 text-base-400">
										Ometa Net provides super-fast Broadband
										connection for Home User on fiber and
										wireless. we believe in full
										satisfaction of customers
									</p> */}
								</div>
							</div>
						</div>

						<div
							className="items-center text-center mx-10  "
							data-aos="fade-up-right"
							data-aos-easing="linear"
							data-aos-duration="1000">
							<div className="card">
								<figure className="mt-8 ">
									<FaRegLifeRing className="text-primary bg-[#bfc0f0]  p-4 rounded-full  text-6xl   " />
								</figure>
								<div className="mt-7">
									<h2 className="text-xl font-semibold">
										24 X 7 SERVICE
									</h2>
									{/* <p className="mt-3 text-base-400">
										Ometa Net provides super-fast Broadband
										connection for Home User on fiber and
										wireless. we believe in full
										satisfaction of customers
									</p> */}
								</div>
							</div>
						</div>

						<div
							className="items-center text-center mx-10  "
							data-aos="fade-up-right"
							data-aos-easing="linear"
							data-aos-duration="1000">
							<div className="card">
								<figure className="mt-8 ">
									<LuRouter className="text-primary bg-[#bfc0f0]  p-3 rounded-full  text-6xl  " />
								</figure>
								<div className="mt-7">
									<h2 className="text-xl font-semibold">
										Minimum Downtime
									</h2>
									{/* <p className="mt-3 text-base-400">
										Ometa Net provides super-fast Broadband
										connection for Home User on fiber and
										wireless. we believe in full
										satisfaction of customers
									</p> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Solution;
