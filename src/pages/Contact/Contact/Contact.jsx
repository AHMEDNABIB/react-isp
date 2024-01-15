import React from "react";
import Address from "../Address/Address";
import ContactFrom from "../ConatactFrom/ContactFrom";

const Contact = () => {
	return (
		<div>
			<div className="hero h-[200px] bg-[#f4f4f5]">
				<div className="hero-content text-center ">
					<div className="max-w-3xl">
						<h1 className="mb-5 text-4xl text-[#333be6]  font-bold">
							CONTACT
						</h1>
						{/* <p className="text-xl">
							Please get in touch and our expert support team will
							answer all your question's
						</p> */}
					</div>
				</div>
			</div>
			<Address />
			<ContactFrom />
		</div>
	);
};

export default Contact;
