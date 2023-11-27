import React from "react";
import image from "../../../assets/image/4.png";
import Address from "../Address/Address";
import ContactFrom from "../ConatactFrom/ContactFrom";

const Contact = () => {
	return (
		<div>
			<div
				className="hero h-[300px] bg-gradient-to-r "
				style={{
					backgroundImage: `url(${image})`,
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-white">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl  font-bold">Contact Us</h1>
					</div>
				</div>
            </div>
            <Address />
            <ContactFrom/>
		</div>
	);
};

export default Contact;
