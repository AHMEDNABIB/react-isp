import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Marquee from "../MarqueeImage/MarqueeImage";
import Services from "../Services/Services";

const Home = () => {
	return (
		<div>
			<Banner></Banner>

			<About></About>

			<Services></Services>

			<div className='className="w-10 mx-auto'>
				<Marquee></Marquee>
			</div>
		</div>
	);
};

export default Home;
