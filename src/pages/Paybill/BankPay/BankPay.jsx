import React from "react";
import image from "../../../assets/image/brac-bank.png";
import image1 from "../../../assets/image/uttara-bank.jpg";

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

			<div className="p-10 lg:w-[1200px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 mx-auto">
				{/*Card 1*/}
				<div className="p-4  ">
					<div className="h-full border-2 border-opacity-60 rounded-lg overflow-hidden border-gray-100 ">
						<div className="p-5 flex items-center gap-4">
							<img
								className="h-20 w-auto rounded-lg shrink-0"
								src={image}
								alt=""
							/>
							<div className="space-y-1">
								<p className="text-2xl font-semibold text-slate-900">
									Brac bank Limited
								</p>
								<p className="text-base font-medium text-slate-700">
									Pay with your Brack bank account.
								</p>
							</div>
						</div>
						<div className=" border-t-2 space-y-2 p-5 py-10">
							<p className="text-base font-normal text-slate-800 ">
								Account Name:Stargate Communications Ltd
							</p>
							<p className="text-base text-slate-700">
								Account No: 1524201693345001
							</p>
							<p className="text-base text-slate-700">
								Branch Name: Elephant Road SME Branch
							</p>
							<p className="text-base text-slate-700">
								Routing Number:060261355
							</p>
						</div>
					</div>
				</div>
				<div className="p-4  ">
					<div className="h-full border-2 border-opacity-60 rounded-lg overflow-hidden border-gray-100 ">
						<div className="p-5 flex items-center gap-4">
							<img
								className="h-20 w-auto rounded-lg shrink-0"
								src={image1}
								alt=""
							/>
							<div className="space-y-1">
								<p className="text-2xl font-semibold text-slate-900">
									Uttara Bank Limited
								</p>
								<p className="text-base font-medium text-slate-700">
									Pay with your Brack bank account.
								</p>
							</div>
						</div>
						<div className=" border-t-2 space-y-2 p-5 py-10">
							<p className="text-base font-normal text-slate-800 ">
								Account Name:Stargate Communications Ltd{" "}
							</p>
							<p className="text-base text-slate-700">
								Account No: 146112200212434
							</p>
							<p className="text-base text-slate-700">
								Branch Name: Eskaton Branch, Dhaka
							</p>
							<p className="text-base text-slate-700">
								Routing Number:250276550
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* new */}
		</div>
	);
};

export default BankPay;
