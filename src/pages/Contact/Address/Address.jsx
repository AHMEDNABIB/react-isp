import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Address = () => {
	return (
		<div className="w-screen-5xl">
			<div className="hero pt-12   bg-[#fff]">
				<div className="hero-content flex-col md:flex-col">
					

					<div className="flex flex-row flex-wrap justify-center my-16  gap-5 w-fit ">
						<div className="items-center text-center    ">
							<div className="card px-14 lg:h-52 rounded-none bg-base-100 shadow-xl">
								<figure className="mt-6">
									<MdEmail className="text-[#5f66bf]  text-2xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">Mail Here</h2>
									<p>info@stargatebd.com </p>
								</div>
							</div>
						</div>
						<div className="items-center text-center   ">
							<div className="card  lg:h-52 rounded-none bg-base-100 shadow-xl">
								<figure className="mt-6">
									<FaMapMarkerAlt className="text-[#5f66bf]  text-2xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">Visit Here</h2>
									<p>52/1, Hasan Holdings, 3rd Floor New</p>
									<p>Eskaton Road, Dhaka- Bangladesh</p>
								</div>
							</div>
						</div>

					

						<div className="items-center text-center   ">
							<div className="card px-20 lg:h-52 rounded-none bg-base-100 shadow-xl">
								<figure className="mt-6">
									<FaPhone className="text-[#5f66bf]  text-2xl group-hover:text-white duration-1000  " />
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">Call Here</h2>
									<p>01933344499</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Address;
