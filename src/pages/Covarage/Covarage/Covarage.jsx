import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";

import CovarageMap from "../CovarageMap/CovarageMap";
import image from "../../../assets/image/9.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Covarage = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	// return console.log(import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY);

	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 500,
		});
	}, []);

	return (
		<>
			<div
				className="hero h-[300px]  "
				style={{
					backgroundImage: `url(${image})`,
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div
					className="hero-content text-center text-white"
					data-aos="fade-up">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl  font-bold">
							Coverage Area
						</h1>
						<p className="text-xl">
							We are available in your doorstep.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="hero  ">
					<div className="hero-content text-center items-center">
						<div className="">
							<CovarageMap isLoaded={isLoaded} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Covarage;
