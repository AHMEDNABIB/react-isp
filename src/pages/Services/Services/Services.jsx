import React from "react";
import image5 from "../../../assets/image/bandwidth.jpg";
import image4 from "../../../assets/image/fiber.png";
import image3 from "../../../assets/image/mpls.jpg";
import image6 from "../../../assets/image/nation.png";
import image1 from "../../../assets/image/school.jpg";
import image from "../../../assets/image/service.jpg";

import { useNavigate } from "react-router-dom";
import Heading from "../Heading/Heading";

const Services = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Heading />

			{/* Home Internet */}
			<div
				className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto my-8"
				data-aos="zoom-in-left">
				<div
					style={{
						backgroundImage: `url(${image})`,
					}}
					className="bg-gray-300 h-72  w-full rounded-lg shadow-md bg-cover bg-center z-10 hover:scale-105 transition duration-700 ease-in-out"></div>
				<div className="hero  border  border-[#f4f4f5] shadow-xl lg:-ml-20 p-16 lg:pl-24 rounded-md">
					<div className="hero-content    ">
						<div className=" lg:max-w-md ">
							<h1 className="text-xl font-bold">
								Home / Shared Internet
							</h1>
							<p className="py-6">
								Stargate offers reliable shared internet access
								for home users. Shared Internet Access is low
								cost solution for anyone who needs immediate
								access in their house with reliability and
								guaranteed uptime
							</p>
							<button
								onClick={() =>
									navigate({
										pathname: "/packages/home_internet",
									})
								}
								className="btn btn-primary   ">
								See the pricing
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Corporate Internet */}

			<div
				className="flex flex-col lg:flex-row-reverse justify-center items-center max-w-5xl mx-auto my-8"
				data-aos="zoom-in-right">
				<div
					style={{
						backgroundImage: `url(${image})`,
					}}
					className="bg-gray-300 h-80 w-full rounded-lg shadow-md bg-cover bg-center z-10 hover:scale-105 transition duration-700 ease-in-out"></div>
				<div className="hero  border border-[#f4f4f5]   shadow-xl lg:-mr-20 p-10 lg:pr-24 rounded-md">
					<div className="hero-content ">
						<div className="max-w-md">
							<h1 className="text-xl font-bold">
								Corporate Internet
							</h1>
							<p className="py-3">
								Stargate Dedicated Internet Access delivers
								seamless access to Internet services such as
								e-mail, web browsing, and files transfer,
								e-Business and intranet applications to global
								businesses. Stargate currently boasts its own
								Fiber Optic network in Dhaka Metropoliton City.
								A range of bandwidth are available to meet
								customer requirements with Guaranteed Committed
								Information Rate and is backed by 24 hour
								customer support and networking monitoring 7
								days a week guaranteeing 99% uptime.
							</p>
							{/* <ul className=" list-disc list-outside mb-5 ml-5">
								<li>
									High Speed Internet over Fiber Optic Link.
								</li>
								<li>
									Inter connectivity among different customer
									locations
								</li>
								<li>
									Stargate offers offers bandwidths from 1Mbps
									to 1Gbps per port
								</li>
								<li> Point to point fiber connectivity.</li>
								<li>
									Point to Point Wireless connectivity at
									remote area.
								</li>
								<li> Uptime 99%.</li>
							</ul> */}
							<button
								onClick={() =>
									navigate({
										pathname: "/packages/corporate",
									})
								}
								className="btn btn-primary ">
								See the pricing
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* Educational */}
			<div
				className="flex flex-col  lg:flex-row justify-center items-center max-w-5xl mx-auto my-8"
				data-aos="zoom-in-left">
				<div
					style={{
						backgroundImage: `url(${image1})`,
					}}
					className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center z-10 hover:scale-105 transition duration-700 ease-in-out"></div>
				<div className="hero  border border-[#f4f4f5]   shadow-xl lg:-ml-20 p-16 pl-24 rounded-md">
					<div className="hero-content ">
						<div className="max-w-md">
							<h1 className="text-xl font-bold">
								Educational Institute & NGO
							</h1>
							<p className="py-6">
								Stargate Communications Limited design bandwidth
								for Educational Institutes, NGO’s & Hospital at
								50% discounted rate. Stargate also provide free
								lab WiFi services for Educational Institute.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* MPLS */}
			<div
				className="flex flex-col lg:flex-row-reverse justify-center items-center max-w-5xl mx-auto my-8"
				data-aos="zoom-in-right">
				<div
					style={{
						backgroundImage: `url(${image3})`,
					}}
					className="bg-gray-300 h-80 w-full rounded-lg shadow-md bg-cover bg-center z-10 hover:scale-105 transition duration-700 ease-in-out"></div>
				<div className="hero  border border-[#f4f4f5]   shadow-xl lg:-mr-20 p-10 pr-24 rounded-md">
					<div className="hero-content ">
						<div className="max-w-md">
							<h1 className="text-xl font-bold">
								MPLS (Multi Protocol Label Switching)
							</h1>
							<p className="py-6">
								• MPLS (Multi Protocol Label Switching) is a
								standards-approved technology for speeding up
								network traffic flow and making it easier to
								manage. MPLS is often referred to as the layer,
								in between the Data Link layer and Network
								layer, serving as a method to forward packets of
								data easily by using labels. The MPLS forwards
								data that relates to both Layer 2 applications,
								such as Ethernet frames, and Layer 3
								applications, such as IP packets. For this
								reason, it is often considered to be in between
								the two recognized layers.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Dark Fiber */}

			<div
				className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto my-8"
				data-aos="zoom-in-left">
				<div
					style={{
						backgroundImage: `url(${image4})`,
					}}
					className="bg-gray-100 h-72 w-full rounded-lg shadow-md bg-cover bg-center z-10 hover:scale-105 transition duration-700 ease-in-out"></div>
				<div className="hero  border border-[#f4f4f5]   shadow-xl lg:-ml-20 p-16 pl-24 rounded-md">
					<div className="hero-content ">
						<div className="max-w-md">
							<h1 className="text-xl font-bold">
								Dark Fiber Connectivity
							</h1>
							<p className="py-6">
								Stargate Dark Fiber is a fiber-optic point to
								point solution that allows you to create your
								own network, without the need to invest in your
								own fiber-optic infrastructure. You choose what
								equipment to use and how and when to connect it
								.You decide the transmission technology and what
								protocols to use
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* •	Bandwidth Based Connectivity */}

			<div
				className="flex flex-col lg:flex-row-reverse justify-center items-center max-w-5xl mx-auto my-8"
				data-aos="zoom-in-right">
				<div
					style={{
						backgroundImage: `url(${image5})`,
					}}
					className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center z-10 hover:scale-105 transition duration-700 ease-in-out"></div>
				<div className="hero  border border-[#f4f4f5]   shadow-xl lg:-mr-20 p-10 pr-24 rounded-md">
					<div className="hero-content ">
						<div className="max-w-md">
							<h1 className="text-xl font-bold">
								Bandwidth Based Connectivity
							</h1>
							<p className="py-6">
								Over the mesh network of 10 Gbps capacity,
								Stargate provides Point-to-Point and Point
								–to-Milti Point connectivity to the clients all
								over the country. To reduce cost clients can
								choose their desire bandwidth for their multiple
								branch connectivity.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Nation connectivity */}
			<div
				className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto my-8"
				data-aos="zoom-in-left">
				<div
					style={{
						backgroundImage: `url(${image6})`,
					}}
					className="bg-gray-100 h-72 w-full rounded-lg shadow-md bg-cover bg-center z-10 hover:scale-105 transition duration-700 ease-in-out"></div>
				<div className="hero  border border-[#f4f4f5]   shadow-xl lg:-ml-20 p-16 pl-24 rounded-md">
					<div className="hero-content ">
						<div className="max-w-md">
							<h1 className="text-xl font-bold">
								Nationwide Connectivity
							</h1>
							<p className="py-6">
								Stargate Communications provides Nationwide Data
								Connectivity Services. Stargate provides Layer 2
								connection and Dark fiber leasing for
								high-bandwidth deployment.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
