import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { IoMdBusiness } from "react-icons/io";
import { MdOutlineAddBusiness } from "react-icons/md";
import { TbWorldLatitude } from "react-icons/tb";
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
			<div className="container">
				<div className=" ">
					<div className="flex flex-col w-80 gap-10 mx-16 lg:flex-row lg:w-full lg:mx-96 my-10">
						<div
							className="col-span-1 bg-white border-2 border-slate-200 rounded-xl shadow-lg overflow-hidden text-anim2"
							data-aos="fade-up-left">
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
							<div className="bg-slate-100 border-t-2 border-slate-200 space-y-2 p-5">
								<p className="text-base font-normal text-slate-800">
									<span className="block tablet:inline-block w-28 font-normal">
										Account Name:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900">
										Xplore Net BD
									</span>
								</p>
								<p className="text-base text-slate-700">
									<span className="block tablet:inline-block w-28 font-normal">
										Account No:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900">
										1547 2042629 50001
									</span>
								</p>
								<p className="text-base text-slate-700">
									<span className="block tablet:inline-block w-28 font-normal">
										Branch Name:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900">
										Dhanmondi Branch, Dhaka
									</span>
								</p>
								<p className="text-base text-slate-700">
									<span className="block tablet:inline-block w-28 font-normal">
										Routing Name:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900"></span>
								</p>
							</div>
						</div>
						<div
							className="col-span-1 bg-white border-2 border-slate-200 rounded-xl shadow-lg overflow-hidden text-anim2"
							data-aos="fade-up-left">
							<div className="p-5 flex items-center gap-4">
								<img
									className="h-20 w-20 rounded-lg shrink-0"
									src={image}
									alt=""
								/>
								<div className="space-y-1">
									<p className="text-2xl font-semibold text-slate-900">
										City Bank
									</p>
									<p className="text-base font-medium text-slate-700">
										Pay with your City Bank account.
									</p>
								</div>
							</div>
							<div className="bg-slate-100 border-t-2 border-slate-200 space-y-2 p-5">
								<p className="text-base font-normal text-slate-800">
									<span className="block tablet:inline-block w-28 font-normal">
										Account Name:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900">
										Xplore Net BD
									</span>
								</p>
								<p className="text-base text-slate-700">
									<span className="block tablet:inline-block w-28 font-normal">
										Account No:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900">
										1502 93133 3001
									</span>
								</p>
								<p className="text-base text-slate-700">
									<span className="block tablet:inline-block w-28 font-normal">
										Branch Name:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900">
										Dhanmondi Branch, Dhaka
									</span>
								</p>
								<p className="text-base text-slate-700">
									<span className="block tablet:inline-block w-28 font-normal">
										Routing Name:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900"></span>
								</p>
							</div>
						</div>
						<div
							className="col-span-1 bg-white border-2 border-slate-200 rounded-xl shadow-lg overflow-hidden text-anim2"
							data-aos="fade-up-left">
							<div className="p-5 flex items-center gap-4">
								<img
									className="h-20 w-20 rounded-lg shrink-0"
									src={image}
									alt=""
								/>
								<div className="space-y-1">
									<p className="text-2xl font-semibold text-slate-900">
										Dutch Bangla Bank{" "}
									</p>
									<p className="text-base font-medium text-slate-700">
										Pay with your Dutch Bangla Bank account.
									</p>
								</div>
							</div>
							<div className="bg-slate-100 border-t-2 border-slate-200 space-y-2 p-5">
								<p className="text-base font-normal text-slate-800">
									<span className="block tablet:inline-block w-28 font-normal">
										Account Name:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900">
										Xplore Net BD
									</span>
								</p>
								<p className="text-base text-slate-700">
									<span className="block tablet:inline-block w-28 font-normal">
										Account No:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900">
										110.110.27000
									</span>
								</p>
								<p className="text-base text-slate-700">
									<span className="block tablet:inline-block w-28 font-normal">
										Branch Name:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900">
										Dhanmondi Branch, Dhaka
									</span>
								</p>
								<p className="text-base text-slate-700">
									<span className="block tablet:inline-block w-28 font-normal">
										Routing Name:
									</span>
									<span className="block tablet:inline-block font-medium text-slate-900"></span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BankPay;
