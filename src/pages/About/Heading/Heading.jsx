import React from 'react';
import image from "../../../assets/image/2.jpg";

const Heading = () => {
    return (
		<div>
			<div
				className="hero h-[400px]  "
				style={{
					backgroundImage: `url(${image})`,
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-white">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl  font-bold">About Us</h1>
						<p className="text-2xl">
							Powered by Passion, United by Expertise
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Heading;