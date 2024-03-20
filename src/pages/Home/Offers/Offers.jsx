import React from "react";
import image from "../../../assets/image/offer.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Offers = () => {

	useEffect(() => {
		AOS.init({
			
		
			easing: "ease-in-sine",
			
		});
	}, []);
	return (
		<div className="hero py-12  bg-[#fff]">
			<div className="hero-content flex-col md:flex-col">
				<div className="items-center" data-aos="fade-up">
					<h1 className="text-5xl font-bold text-center">
						Discover New Offers
					</h1>

					<p className="py-6 text-center">
						Take advantage of our exciting offers and elevate your
						experience
					</p>
				</div>

				<progress
					className="progress progress-primary bg-[#878be7] w-56 mb-10 "
					data-aos="fade-up"></progress>

				<main className="overflow-hidden">
					<div className="flex flex-row flex-wrap justify-center h-[500px] w-fit   ">
						<div
							className="space-y-4 group relative h-72 desktop:h-96"
							data-aos="flip-up"
							data-aos-easing="linear"
							data-aos-duration="1000">
							<div className="bg-transparent rounded-lg overflow-hidden relative z-10 before:z-10 before:content-[''] before:-bottom-full group-hover:before:bottom-0 before:left-0 before:absolute before:h-full before:w-full before:group-hover:bg-gray-800 before:group-hover:bg-opacity-70 text-center before:transition-all before:duration-500 before:ease transition-all duration-500 ease-in-out">
								<div className="h-96 desktop:h-96 w-full relative">
									<img
										className="h-full w-full object-cover object-center"
										src={image}
										alt=""
									/>
								</div>
								<div className="opacity-0 group-hover:opacity-100 bg-transparent absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center transition-all duration-200 ease-in-out w-full p-4">
									<div className="bg-white rounded-full px-4 py-2 text-center text-lg text-gray-700 w-full">
										13 Oct 2023&nbsp;-&nbsp; 31 Dec 2023
									</div>
									<div className="w-10/12 mt-5 mx-auto">
										<Link
											to="/offers"
											className="btn px-8 btn-primary rounded-full">
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Offers;
  