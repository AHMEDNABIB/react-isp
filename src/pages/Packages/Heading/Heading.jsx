import React from "react";
import image from "../../../assets/image/package.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Heading = () => {
		useEffect(() => {
			AOS.init({
				offset: 200,
				duration: 600,
				easing: "ease-in-sine",
				delay: 500,
			});
		}, []);
	return (
		<div>
			<div
				className="hero h-[400px]  "
				style={{
					backgroundImage: `url(${image})`,
					height:"300px"
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-white">
					<div className="max-w-md" data-aos="fade-up">
						<h1 className="mb-3 text-5xl  font-bold">Packages</h1>
						<p className="text-lg">Pay by month or the year, and cancel at any time.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Heading;
