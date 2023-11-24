import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div>
         
            <Banner></Banner>
            {/* <div className="max-w-screen-2xl mx-auto"> */}
                <About></About>
            {/* </div> */}
        </div>
    );
};

export default Home;