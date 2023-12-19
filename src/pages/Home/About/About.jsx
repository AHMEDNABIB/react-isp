import React from "react";

// import image from "../../../../public/image/7.jpg";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 500,
		});
	}, []);
	return (
		<div className="hero bg-[#f2f4f7] py-20  mt-[-10px]">
			<div className="hero-content flex-col lg:flex-row space-x-5">
				<div
					className="lg:w-1/2 -mt-12 space-y-4 p-4"
					data-aos="fade-right">
					<h5 className="text-lg text-primary font-bold">
						Where Speed Meets Seamless
					</h5>
					<h1 className="text-4xl font-bold">
						About Stargate Internet{" "}
					</h1>
					<p className="py-3 ">
						Stargate pioneered the concept of providing smooth IT
						and Internet Service when clients were victim of
						interrupted service. We in fact have become the first
						company that led the people get information with latest
						network technology by in their finger tips in
						convenience and faster way by giving individuals and
						small businesses the ability to use Internet as a tool
						to make their lives more productive and their business
						more profitable...
					</p>
					{/* <div className=" space-y-3 ">
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
					</div> */}

					<Link to="/about" className="btn btn-primary rounded-full">
						More About Us
					</Link>
				</div>

				<div
					className="lg:w-1/2 mt-10  space-y-4 lg:p-4"
					data-aos="fade-left">
					<h5 className="text-xl text-primary font-bold">
						Legacy Of Trust
					</h5>
					<h1 className="text-4xl font-bold">Services & Solutions</h1>
					<div className="py-3">
						<p>
							In view of customer requirements, Stargate has
							designed the best plans to serve every user’s need.
							Because you always needed information fast and
							stable, we have created the most flexible internet
							service plans to cater every need of your’s. The
							entire solution being performed on dedicated fiber
							optic, ethernet or radio, with guaranteed bandwidth
							and unlimited traffic. Our service delivery vision
							include:
						</p>
						<ul className="list-disc ml-6">
							<li> 99% service uptime</li>
							<li> Round the clock service</li>
							<li> Quick turnaround time in resolving issues</li>
							<li> Multiple backbones</li>
						</ul>
					</div>

					<Link to="services" className="btn btn-primary rounded-full">
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
