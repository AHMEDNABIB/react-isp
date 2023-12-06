import React, { useEffect } from "react";
import Client from "../Client/Client";
import Heading from "../Heading/Heading";
import History from "../History/History";
import Mission from "../Mission/Mission";
import Vision from "../Vision/Vision";

import AOS from "aos";
import "aos/dist/aos.css";
import Value from "../Value/Value";

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
		<div>
			<Heading />
			<History />
			<Client />
			<Vision />
			<Mission />
			<Value />
		</div>
	);
};

export default About;
