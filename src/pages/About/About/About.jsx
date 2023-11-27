import React from 'react';
import Heading from '../Heading/Heading';
import History from '../History/History';
import Client from '../Client/Client';
import Vision from '../Vision/Vision';
import Mission from '../Mission/Mission';
import Usp from '../Usp/Usp';

const About = () => {
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