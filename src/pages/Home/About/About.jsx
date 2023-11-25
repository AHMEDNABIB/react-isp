import React from "react";

import image from "../../../../public/image/7.jpg";

import { SlArrowRightCircle } from "react-icons/sl";
import "animate.css";

const About = () => {
	return (
		<div className="hero bg-[#f2f4f7]  mt-[-10px]">
			<div className="hero-content flex-col lg:flex-row space-x-5">
				<div className="lg:w-1/2  relative animate__animated animate__backInLeft ">
					<img
						src={image}
						className=" rounded-lg shadow-2xl h-[630px]"
					/>
				</div>

				<div className="lg:w-1/2  space-y-4 p-4">
					<h5 className="text-xl text-primary font-bold">
						LEGACY OF TRUST
					</h5>
					<h1 className="text-5xl font-bold">
						Engaging New Audiences Through Smart Approach
					</h1>
					<p className="py-3 text-stone-500">
						Stargate pioneered the concept of providing smooth IT
						and Internet Service when clients were victim of
						interrupted service. We in fact have become the first
						company that led the people get information with latest
						network technology by in their finger tips in
						convenience and faster way by giving individuals and
						small businesses the ability to use Internet as a tool
						to make their lives more productive and their business
						more profitable. Stargate is continually developing a
						new and innovative suite of services that make it a
						faster, easier and smarter connectivity experience.
					</p>
					<div className=" space-y-3 ">
						<div className="flex items-center justify-between w-28 ">
							<p className="mr-4">
								<SlArrowRightCircle
									style={{
										color: "rgb(109 40 217)",

										fontSize: "1.3em",
									}}
								/>
							</p>
							<p className="font-semibold">Infotainment</p>
						</div>
						<div className="flex items-center justify-between w-60 ">
							<p className="mr-3">
								<SlArrowRightCircle
									style={{
										color: "rgb(109 40 217)",

										fontSize: "1.3em",
									}}
								/>
							</p>
							<p className="font-semibold ">
								Two Decades of excellence
							</p>
						</div>
						<div className="flex items-center justify-between w-72 ">
							<p className="mr-1">
								<SlArrowRightCircle
									style={{
										color: "rgb(109 40 217)",

										fontSize: "1.3em",
									}}
								/>
							</p>
							<p className="font-semibold">
								Fast, dependable and connected
							</p>
						</div>
						<div className="flex items-center justify-between w-48 ">
							<p className="mr-3">
								<SlArrowRightCircle
									style={{
										color: "rgb(109 40 217)",

										fontSize: "1.3em",
									}}
								/>
							</p>
							<p className="font-semibold">Minimum Downtime</p>
						</div>
						<div className="flex items-center justify-between w-[150px] ">
							<p className="mr-3">
								<SlArrowRightCircle
									style={{
										color: "rgb(109 40 217)",

										fontSize: "1.3em",
									}}
								/>
							</p>
							<p className="font-semibold">Unlimited Data</p>
						</div>
					</div>
					<button className="btn btn-primary rounded-full">
						Discover more
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
