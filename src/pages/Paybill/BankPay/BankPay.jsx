import React from "react";
import image from "../../../assets/image/city-bank.jpeg";

const BankPay = () => {
	return (
		<div>
			<div className="hero ">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-3xl lg:text-5xl font-bold">
							Pay Through Bank
						</h1>
					</div>
				</div>
			</div>
			<div className="container px-5 pt-5 pb-24 mx-auto">
				<div className=" ">
					<div className="flex flex-wrap -m-4">
						<div className="p-4 md:w-1/3 ">
							<div className="h-full border-2 border-opacity-60 rounded-lg overflow-hidden border-gray-100 ">
								<div className="p-5 flex items-center gap-4">
									<img
										className="h-20 w-auto rounded-lg shrink-0"
										src={image}
										alt=""
									/>
									<div className="space-y-1">
										<p className="text-2xl font-semibold text-slate-900">
											Brack Bank
										</p>
										<p className="text-base font-medium text-slate-700">
											Pay with your Brack bank account.
										</p>
									</div>
								</div>
								<div className=" border-t-2 space-y-2 p-5 py-10">
									<p className="text-base font-normal text-slate-800 ">
										Account Name:Stargate Internet
									</p>
									<p className="text-base text-slate-700">
										Account No: 1547 2042629 50001
									</p>
									<p className="text-base text-slate-700">
										Branch Name: Dhanmondi Branch, Dhaka
									</p>
									<p className="text-base text-slate-700">
										Routing Name:
									</p>
								</div>
							</div>
						</div>

						<div className="p-4 md:w-1/3">
							<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
								<div className="p-5 flex items-center gap-4 ">
									<img
										className="h-20 w-auto rounded-lg shrink-0"
										src={image}
										alt=""
									/>
									<div className="space-y-1">
										<p className="text-2xl font-semibold text-slate-900">
											Brack Bank
										</p>
										<p className="text-base font-medium text-slate-700">
											Pay with your Brack bank account.
										</p>
									</div>
								</div>
								<div className=" border-t-2 space-y-2 p-5 py-10 ">
									<p className="text-base font-normal text-slate-800 ">
										Account Name:Stargate Internet
									</p>
									<p className="text-base text-slate-700">
										Account No: 1547 2042629 50001
									</p>
									<p className="text-base text-slate-700">
										Branch Name: Dhanmondi Branch, Dhaka
									</p>
									<p className="text-base text-slate-700">
										Routing Name:
									</p>
								</div>
							</div>
						</div>

						<div className="p-4 md:w-1/3">
							<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
								<div className="p-5 flex items-center gap-4">
									<img
										className="h-20 w-auto rounded-lg shrink-0"
										src={image}
										alt=""
									/>
									<div className="space-y-1">
										<p className="text-2xl font-semibold text-slate-900">
											Brack Bank
										</p>
										<p className="text-base font-medium text-slate-700">
											Pay with your Brack bank account.
										</p>
									</div>
								</div>
								<div className=" border-t-2 space-y-2 p-5 py-10 ">
									<p className="text-base font-normal text-slate-800 ">
										Account Name:Stargate Internet
									</p>
									<p className="text-base text-slate-700">
										Account No: 1547 2042629 50001
									</p>
									<p className="text-base text-slate-700">
										Branch Name: Dhanmondi Branch, Dhaka
									</p>
									<p className="text-base text-slate-700">
										Routing Name:
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* new */}
		</div>
	);
};

export default BankPay;
