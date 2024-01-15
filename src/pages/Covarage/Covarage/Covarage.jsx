import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";

import "aos/dist/aos.css";
import CovarageMap from "../CovarageMap/CovarageMap";

const Covarage = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	return (
		<>
			<div className="hero h-[200px] bg-[#f4f4f5]  ">
				<div className="hero-content text-center text-white">
					<div className="max-w-md">
						<h1 className="mb-5 text-4xl text-[#333be6]  font-bold">
							COVERAGE AREA
						</h1>
						{/* <p className="text-xl">
							We are available in your doorstep.
						</p> */}
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
