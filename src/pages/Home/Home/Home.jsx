import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Marquee from "../MarqueeImage/MarqueeImage";
import Services from "../Services/Services";

import Solution from "../Solution/Solution";

const Home = () => {
	return (
		<div>
			<Banner></Banner>

			<About></About>

			<Services></Services>
			<div className="bg-[#f2f4f7]">
				<div className="max-w-screen-2xl mx-auto  ">
					<Solution></Solution>
				</div>
			</div>

			<div className='className="  mx-auto '>
				<Marquee></Marquee>
			</div>
		</div>
	);
};

export default Home;
