import React, { useEffect, useState } from "react";
import { FaBackward } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { BsClipboard2DataFill } from "react-icons/bs";
import { BsClipboardCheckFill } from "react-icons/bs";
import { TbCoinTakaFilled } from "react-icons/tb";
import BankPay from "../BankPay/BankPay";
import AOS from "aos"; 
import "aos/dist/aos.css";
import Heading from "../Heading/Heading";

import bkash from "../../../assets/image/bkash.jpg";

const Paybill = () => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 500,
		});
	}, []);
	const [openTab, setOpenTab] = useState(1);

	return (
		<div>
			<Heading />
			<div className="hero mt-8 ">
				<div className="hero-content text-center flex-col ">
					<div className="max-w-xl">
						<h1 className=" text-3xl  lg:text-5xl font-bold">
							Pay Bill through Mobile
						</h1>
					</div>
					<div className="">
						<div className="container  mt-12">
							<div className="flex flex-col items-center justify-between max-w-sm">
								<ul className="flex space-x-2">
									<li>
										<a
											href="#"
											onClick={() => setOpenTab(1)}
											className={` ${
												openTab === 1
													? " bg-primary text-white btn btn-ghost py-4 px-14 mx-1 border-md  border-1 border-base-400 rounded-md "
													: " bg-base-300 btn btn-ghost py-4 px-14 mx-1 border-md  border-1 border-base-400 rounded-md"
											} `}>
											bKash
										</a>
									</li>
									<li>
										<a
											href="#"
											onClick={() => setOpenTab(2)}
											className={` ${
												openTab === 2
													? " bg-primary text-white btn btn-ghost py-4 px-14 mx-1 border-md  border-1 border-base-400 rounded-md "
													: " bg-base-300 btn btn-ghost py-4 px-14 mx-1 border-md  border-1 border-base-400 rounded-md"
											} `}>
											Nagad
										</a>
									</li>
								</ul>
								<div className="p-3 mt-6 bg-white">
									<div
										className={
											openTab === 1 ? "block" : "hidden"
										}>
										{" "}
										<div className="flex items-center justify-between -ml-80 ">
											<ul className="timeline timeline-vertical ">
												<li>
													<div className="timeline-middle">
														<FaBackward className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														Login to your bKash
														account with your
														account's PIN number and
														tap on "Pay Bill"
														option.
													</div>
													<hr />
												</li>
												<li>
													<hr />
													<div className="timeline-middle">
														<FaLightbulb className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														In "Pay Bill" option
														you'll find "Stargate
														Internet". Simply tap on
														it and follow the next
														step.
													</div>
													<hr />
												</li>
												<li>
													<hr />
													<div className="timeline-middle">
														<BsClipboard2DataFill className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														Now Enter Customer Id
														and Customer Contact
														Number.Tap on it and
														follow the next step.
													</div>
													<hr />
												</li>
												<li>
													<hr />
													<div className="timeline-middle">
														<BsClipboardCheckFill className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														Enter Amount of money
														you wan to pay
													</div>
													<hr />
												</li>
												<li>
													<hr />
													<div className="timeline-middle">
														<TbCoinTakaFilled className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														After that, hold the pay
														button for a few second.
														You're done!
													</div>
												</li>
											</ul>

											<img
												className="ml-[400px] "
												src={bkash}
												alt=""
											/>
										</div>
									</div>
									<div
										className={
											openTab === 2 ? "block" : "hidden"
										}>
										<div>
											<ul className="timeline timeline-vertical items-start lg:ml-[-200px] ml-[-380px]">
												<li>
													<div className="timeline-middle">
														<FaBackward className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														Login to your Nagad
														account with your
														account's PIN number and
														tap on "Pay Bill"
														option.
													</div>
													<hr />
												</li>
												<li>
													<hr />
													<div className="timeline-middle">
														<FaLightbulb className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														In "Pay Bill" click
														internet option you'll
														find "Stargate
														Internet". Simply tap on
														it and follow the next
														step.
													</div>
													<hr />
												</li>
												<li>
													<hr />
													<div className="timeline-middle">
														<BsClipboard2DataFill className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														Now Enter Customer Id
														Tap on it and follow the
														next step.
													</div>
													<hr />
												</li>
												<li>
													<hr />
													<div className="timeline-middle">
														<BsClipboardCheckFill className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														Enter Amount of money
														you wan to pay and give
														reference Name and
														follow the next step
													</div>
													<hr />
												</li>
												<li>
													<hr />
													<div className="timeline-middle">
														<TbCoinTakaFilled className="text-[#fff] bg-primary rounded-full   text-3xl p-2  " />
													</div>
													<div className="timeline-end timeline-box w-96">
														Enter the pin number
														.After that , hold the
														pay button for a few
														second. You're done!
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<BankPay />
		</div>
	);
};

export default Paybill;
