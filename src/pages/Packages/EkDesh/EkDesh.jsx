import React from "react";
import { ekdesh } from "../../../data/data-package";
import { useNavigate } from "react-router-dom";
const EkDesh = () => {
	const navigate = useNavigate();
	return (
		<div className="">
			<div className="flex flex-wrap justify-center">
				{ekdesh.map((u) => {
					return (
						<div key={u.speed} data-aos="zoom-in">
							<div className="flex flex-col bg-base-200 rounded-lg shadow-md w-60  m-6 overflow-hidden hover:scale-110 duration-500 ">
								<h2 className="text-center text-primary mt-4 px-2 pb-5">
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
											{/* if there is a button in form, it will close the modal */}
											<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
												✕
											</button>
										</form>
										<h3 className="font-bold text-2xl">
											Terms And Conditions
										</h3>
										<div className="py-4 h-96  overflow-auto mb-3">
											<h3>
												{" "}
												<span className="font-bold">
													1. CONTRACT PERIOD
												</span>{" "}
												: 1 Year
											</h3>
											<h3 className="font-bold my-2">
												2. PAYMENT TERMS
											</h3>
											<p className="my-2">
												· The client agrees to pay
												Internet fees for the subscribed
												speed.
											</p>
											<p className="my-2">
												· All recurring charges shall
												pay on Prepaid Basis after
												completing installation.
											</p>
											<p className="my-2">
												· Payment shall make after
												receiving the invoice within
												3-days for the new site
												installation and within 7 Days
												before the due date of the
												following next invoices.
											</p>
											<p className="my-2">
												· The client agrees to pay all
												outstanding invoices if not paid
												within 7 Days for any due
												invoices, Then, "STARGATE"
												reserves the right to
												stop/deactivate the service.
											</p>
											<p className="my-2">
												· The client shall inform
												one-month prior notice for
												Payment Plan Changes.
											</p>
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
									className="bg-primary text-white  text-center hover:bg-blue-600 hover:text-xl transition-all duration-500">
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

export default EkDesh;
