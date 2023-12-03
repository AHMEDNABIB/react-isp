import React from "react";
import {
	FaChartLine,
	FaHandshake,
	FaHeadset,
	FaMoneyBillWave,
} from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";

const Features = () => {
	return (
		<div className="w-screen-5xl bg-base-200">
			<div className="hero py-12   ">
				<div className="hero-content flex-col md:flex-col">
					<div className="items-center max-w-5xl">
						<h1 className="text-5xl font-bold text-center ">
							Thrilling Features
						</h1>
						<p className="py-6 text-center">
							Visit Stargate Internet Systems right now to take
							advantage of our special features.
						</p>
					</div>

					<progress className="progress progress-primary bg-[#878be7] w-56 mb-10 "></progress>

					<div
						className="flex flex-row flex-wrap justify-center my-16  gap-5 w-fit "
						data-aos="fade-up-right">
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
										Stargate Internet provides "TRULY
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
										Stargate Internet constantly endeavors
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
										Stargate Internetis almost synonymous
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
										Stargate Internetbelieves "Smart
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

export default Features;
