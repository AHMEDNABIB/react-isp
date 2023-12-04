import React from "react";
import { sme } from "../../../data/data-package";

const SME = () => {
	return (
		<div className="mt-10">
			<div className="flex flex-wrap justify-center ">
				{sme.map((u) => {
					return (
						<div data-aos="zoom-in" key={u.speed}>
							<div className="flex flex-col bg-base-200 rounded-lg shadow-md w-60  m-6 overflow-hidden hover:scale-110 duration-500 ">
								<h2 className="text-center text-primary mt-4 px-2 pb-5">
									{u.name}
								</h2>
								<h2 className="text-center text-3xl font-semibold px-2 pb-5">
									{u.speed} Mbps
								</h2>

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
									className="bg-primary text-white p-3 text-center hover:bg-blue-600 hover:text-xl transition-all duration-500">
									Get It Now
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

export default SME;
