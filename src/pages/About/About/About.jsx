import React, { useEffect } from 'react';
import Heading from '../Heading/Heading';
import History from '../History/History';
import Client from '../Client/Client';
import Vision from '../Vision/Vision';
import Mission from '../Mission/Mission';
import Usp from '../Usp/Usp';
import AOS from "aos";
import "aos/dist/aos.css";

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
            <Usp/>
        </div>
    );
};

export default About