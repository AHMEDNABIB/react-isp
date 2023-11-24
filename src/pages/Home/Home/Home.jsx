import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Marquee from '../MarqueeImage/MarqueeImage';

const Home = () => {
    return (
		<div>
			<Banner></Banner>
			{/* <div className="max-w-screen-2xl mx-auto"> */}
			<About></About>
			{/* </div> */}

            <div className='className="w-10 mx-auto'>
                
			<Marquee></Marquee>
            </div>
		</div>
	);
};

export default Home;