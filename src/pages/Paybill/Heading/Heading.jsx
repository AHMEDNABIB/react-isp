import React from "react";
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
			<div className="hero h-[300px] bg-base-200 ">
				<div className="hero-content text-center" data-aos="fade-up">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Pay Bill</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Heading;
