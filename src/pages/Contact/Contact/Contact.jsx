import React from "react";
import image from "../../../assets/image/4.png";
import Address from "../Address/Address";
import ContactFrom from "../ConatactFrom/ContactFrom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {

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
			<div
				className="hero h-[300px] bg-gradient-to-r "
				style={{
					backgroundImage: `url(${image})`,
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div
					className="hero-content text-center text-white"
					data-aos="fade-up">
					<div className="max-w-3xl">
						<h1 className="mb-5 text-5xl  font-bold">Contact Us</h1>
						<p className="text-xl">
							Please get in touch and our expert support team will
							answer all your question's
						</p>
					</div>
				</div>
			</div>
			<Address />
			<ContactFrom />
		</div>
	);
};

export default Contact;
