import React from "react";
import { IoIosPerson } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaChartLine, FaHandshake, FaHeadset, FaMoneyBillWave } from "react-icons/fa6";
const Usp = () => {
	return (
		<div className="w-screen-5xl">
			<div className="hero py-12   bg-[#fff]">
				<div className="hero-content flex-col md:flex-col">
					<div className="items-center max-w-5xl">
						<h1 className="text-4xl font-bold text-center ">
							Our Usp
						</h1>
					</div>

					<div className="flex flex-row flex-wrap justify-center my-16  gap-5 w-fit ">
						<div className="items-center text-center    ">
							<div className="card w-96 bg-base-100 h-96 shadow-xl">
								<figure className="mt-6">
									<IoSpeedometerOutline className="text-[#5f66bf]  text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										TRULY UNLIMITED BROADBAND
									</h2>
									<p>
										Alliance Broadband provides "TRULY
										UNLIMITED HIGH SPEED BROADBAND"
										packages, No more painful buffering.
									</p>
								</div>
							</div>
						</div>

						<div className="items-center text-center  mx-5   ">
							<div className="card w-96 bg-base-100 h-96 shadow-xl">
								<figure className="mt-6">
									<IoIosPerson className="text-[#5f66bf]  text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										STRONG CUSTOMER FOCUS
									</h2>
									<p>
										Alliance Broadband constantly endeavors
										to promote client interest come what
										may. From installing the state of the
										art equipment's at our Network Operating
										Centre (NOC) and Hubs to sophisticated
										devices at our last mile Channel Partner
										offices
									</p>
								</div>
							</div>
						</div>

						<div className="items-center text-center   ">
							<div className="card w-96 h-96 bg-base-100 shadow-xl">
								<figure className="mt-6">
									<FaHeadset className="text-[#5f66bf]  text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										LEGENDARY CUSTOMER SERVICE
									</h2>
									<p>
										Alliance Broadband is almost synonymous
										with its top notch Customer Service from
										easy complaint registration to
										resolution, the Turnaround Time (TAT) is
										counted as exemplary by industry
										standards.
									</p>
								</div>
							</div>
						</div>

						<div className="items-center text-center   ">
							<div className="card w-96 h-96 bg-base-100 shadow-xl">
								<figure className="mt-6">
									<FaChartLine className="text-[#5f66bf]  text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										AN EXPERIENCED TREND SETTER
									</h2>
									<p>
										Alliance Broadband's top management has
										immense ground level experience in
										network operations and control. The
										cumulative experience has paid dividends
										in understanding consumer trends and
										preferences.
									</p>
								</div>
							</div>
						</div>
						<div className="items-center text-center mx-5   mt-[-3] ">
							<div className="card w-96 h-96 bg-base-100 shadow-xl">
								<figure className="mt-6">
									<FaMoneyBillWave className="text-[#5f66bf]  text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										SMART ECONOMICS
									</h2>
									<p>
										Alliance Broadband believes "Smart
										Economics" for its client. Our plans are
										robust yet competitive devised to serve
										all our customer segments with enormous
										viability.
									</p>
								</div>
							</div>
						</div>

						<div className="items-center text-center   mt-[-3] ">
							<div className="card w-96 h-96 bg-base-100 shadow-xl">
								<figure className="mt-6">
									<FaHandshake className="text-[#5f66bf] text-6xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										TRUSTED VENDOR PARTNERS
									</h2>
									<p>
										Enterprise Class demands Steady, Secured
										& Reliable Communication Solutions and
										the quest ends at Alliance Broadband.
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

export default Usp;
