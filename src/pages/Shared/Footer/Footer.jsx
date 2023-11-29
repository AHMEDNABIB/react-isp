import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {  AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
	return (
		<>
			<footer className="footer p-7    text-neutral-content max-w-screen-2xl mx-auto  ">
				<ul>
					<header className="footer-title">Company</header>
					<li className="link link-hover hover:text-[#2791c0]">
						About us
					</li>
					<p className="link link-hover ">Pricing</p>
					<li className="link link-hover">Coverage Area</li>
					<li className="link link-hover">Bill Payment</li>
				</ul>
				<ul>
					<header className="footer-title">Services</header>
					<li className="link link-hover ">Home Internet</li>
					<li className="link link-hover">Corporate</li>
					<li className="link link-hover">SME</li>
				</ul>

				<ul>
					<header className="footer-title">Legal</header>
					<li className="link link-hover">Terms of use</li>
					<li className="link link-hover">Privacy policy</li>
					<li className="link link-hover">Cookie policy</li>
				</ul>

				<div className="  ">
					<header className="footer-title">Contact us</header>
					<div className="flex items-center justify-between  w-28  	">
						<p>
							<FaPhoneAlt />
						</p>
						<p>01933344499</p>
					</div>
					<div className="flex items-center justify-between  w-40  	">
						<p>
							<AiTwotoneMail />
						</p>
						<p>info@stargatebd.com</p>
					</div>
					<div className="flex items-start justify-between  w-72  	">
						<p className="mt-1">
							<FaMapMarkerAlt />
						</p>
						<p className="mr-3">
							52/1, Hasan Holdings, 3rd Floor <br /> New Eskaton
							Road, Dhaka- Bangladesh
						</p>
					</div>
				</div>
			</footer>
			<aside className="text-center p-3 text-neutral-content ">
				<p>
					Copyright © 2023 - All right reserved by Stargate
					Communications Ltd
				</p>
			</aside>
		</>
	);
};

export default Footer;
