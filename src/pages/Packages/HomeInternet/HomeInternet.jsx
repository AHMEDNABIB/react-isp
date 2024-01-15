import React from "react";

import { useNavigate } from "react-router-dom";
import { home } from "../../../data/data-package";
import "./HomeInternet.css";

const HomeInternet = () => {
	const navigate = useNavigate();

	return (
		<div className="">
			<div className="flex flex-wrap justify-center">
				{home.map((u) => {
					return (
						<div data-aos="zoom-in" key={u.speed}>
							<div className="flex flex-col bg-base-200 rounded-lg shadow-md w-60  m-6 overflow-hidden hover:scale-110 duration-500 ">
								<h2 className="text-center text-primary font-bold mt-4 px-2 pb-5 ">
									{u.name}
								</h2>
								<h2 className="text-center text-3xl font-semibold px-2 pb-5">
									{u.speed} Mbps
								</h2>

								<button
									className="btn btn-primary w-40 mx-auto hover:bg-base-100 hover:text-accent-content mb-5  rounded-full"
									onClick={() =>
										document
											.getElementById(`${u.name}`)
											.showModal()
									}>
									Order Now
								</button>
								<dialog
									id={u.name}
									className="modal modal-middle  sm:modal-middle  ">
									<div className="modal-box ">
										<form method="dialog">
											<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
												✕
											</button>
										</form>
										<h3 className="font-bold text-2xl">
											Terms And Conditions
										</h3>
										<div className="py-4 h-96 px-2  overflow-auto mb-3">
											<h3>
												{" "}
												<span className="font-bold">
													These general Terms and
													Conditions shall be part of
													the agreement between
													Stargate Internet and the
													subscriber.
												</span>{" "}
											</h3>

											<ul className="list-disc list-outside">
												<li className="py-2 pt-4 pl-2">
													1. Subscriber will declare
													that the information and
													data given are correct. In
													case of any false
													information, the Subscriber
													will be liable to
													appropriate legal action.
												</li>
												<li className="py-2 pl-2">
													2. Subscriber will not share
													his/her connection with
													anybody’s PC or use more
													computers than mentioned.
													Otherwise, Stargate
													Communications Limited can
													discontinue the line.
												</li>
												<li className="py-2 pl-2">
													3. Stargate Communications
													Limited may install HUB/
													Switch or another device any
													time and the Subscriber is
													obligated to provide space
													and power outlet for that
													purpose.
												</li>
												<li className="py-2 pl-2">
													4. Due to an electric short
													circuit to thunder if any
													damage Stargate Internet are
													not responsible for it.
												</li>
												<li className="py-2 pl-2">
													4. The one-time installation
													charge (OTC) is not
													refundable.
												</li>
												<li className="py-2  pl-2">
													5. The monthly bill or line
													rent has to be paid to
													Stargate Internet a prepaid
													basis.
												</li>
												<li className="py-2  pl-2">
													6. If the bill is not paid
													on a prepaid basis of the
													respective month to the
													Stargate Internet office,
													the line will be blocked
													without any prior notice. It
													may take 24 (Twenty four)
													hours to un-block the line,
													once it is blocked.
												</li>
												<li className="py-2  pl-2">
													7. Stargate Internet may
													charge or modify this
													agreement of prices and may
													discontinue or revise all
													other aspects of the
													internet service at its own
													discretion and with prior
													notic
												</li>
												<li className="py-2  pl-2">
													8. The subscriber would not
													able to change his / her
													time slot for the first 3
													(three) months. After that,
													if the Subscriber wishes to
													change his/her time slot,
													Stargate Internet will
													charge Tk. 500 ( Five
													hundred) as conversion
													charge.
												</li>
												<li className="py-2  pl-2">
													9. The subscriber will be
													able to unblock his/her line
													within 3 (Three) months by
													paying the last billed
													amount in full (No
													concessions possible) with
													the current month’s bill in
													advance.
												</li>
												<li className="py-2  pl-2">
													10. Subscriber can stop
													his/her internet service by
													completing a short formality
													with Stargate Internet one
													month earlier.
												</li>
												<li className="py-2  pl-2">
													11. After unsubscribing our
													connectivity Stargate
													Internet with take-back
													cables and other devices
													which we have been providing
													to establish a connection.
												</li>
												<li className="py-2  pl-2">
													12. The subscriber shall not
													use the connection for any
													illegal purpose.
												</li>
											</ul>
										</div>
										<button
											onClick={() =>
												navigate(
													{
														pathname: "/order-form",
														search: `?package=${u.type}&plan=${u.name}`,
													},
													{ state: u }
												)
											}
											className="btn btn-primary w-40 mx-auto hover:bg-base-100 hover:text-accent-content rounded-full">
											Accept
										</button>
									</div>
								</dialog>

								<div className="bg-white py-3   ">
									<h2 className="text-center">
										<span className="text-5xl">
											{u.cost}
										</span>{" "}
										Tk/ Month
									</h2>
								</div>

								<div className="bg--base-200 p-3"></div>

								<a
									href="#"
									className="bg-primary text-white  text-center hover:bg-blue-600  ">
									Tax Exclusive
								</a>
							</div>
						</div>
					);
				})}
				;
			</div>
		</div>
	);
};

export default HomeInternet;
