import React from "react";
import image from "../../../assets/image/8.png";

const ContactFrom = () => {
	return (
		<div>
			<div className="hero m">
				<div className="hero-content flex-col lg:flex-row">
					<img src={image} className=" rounded-lg  shadow-2xl" />
					<div>
						<div className="container mx-auto my-20 border border-base-300 bg-white">
							<div className="p-5 space-y-3 shadow-xl">
								<form>
									<div className="grid grid-cols-2 gap-5">
										<input
											type="text"
											className="border border-base-300 px-4 py-2 focus:outline-none focus:border-purple-500"
											placeholder="First Name"
										/>
										<input
											type="text"
											className="border border-base-300 px-4 py-2 focus:outline-none focus:border-purple-500"
											placeholder="Last Name"
										/>
										<input
											type="email"
											className="border border-base-300 px-4 py-2 focus:outline-none focus:border-purple-500"
											placeholder="Email"
										/>
										<input
											type="tel"
											className="border border-base-300 px-4 py-2 focus:outline-none focus:border-purple-500"
											placeholder="Phone"
										/>
										<input
											type="text"
											className="border border-base-300 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
											placeholder="Subject"
										/>

										<textarea
											cols="10"
											rows="5"
											className="border border-base-300 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
											placeholder="Write your message..."></textarea>
									</div>
									<input
										type="submit"
										value="Send Message"
										className="focus:outline-none mt-5 bg-primary px-4 py-2 text-white font-bold w-full"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactFrom;
