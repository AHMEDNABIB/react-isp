import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PackageForm = () => {
    const [select, setSelect] = useState(false);
    const {state} = useLocation()

    console.log(state)

	return (
		<div className=" ">
			<div className="hero bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-xl">
						<h1 className="text-3xl font-bold">
							Internet Service Application Form
						</h1>
					</div>
				</div>
			</div>
			<div className="max-w-5xl mt-10 mx-auto">
				<div className="">
					<div
						id="section2"
						className="p-8 mt-6 lg:mt-0 rounded shadow ">
						<form>
							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									<label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-textfield">
										Name of Applicant:{" "}
										<label className="text-red-400">
											*
										</label>
									</label>
								</div>
								<div className="md:w-1/2">
									<input
										className="form-input block w-full border-2 p-2 border-gray-300 rounded-md "
										type="text"
										defaultValue="Name"
									/>
								</div>
							</div>

							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									<label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-radio">
										Applicant Type :{" "}
										<label className="text-red-400">
											*
										</label>
									</label>
								</div>
								<div className="md:w-1/2">
									<div className="mt-2">
										<label className="inline-flex items-center">
											<input
												type="radio"
												className="form-radio text-indigo-600"
												name="radioOption"
												defaultValue="A"
												onClick={() => setSelect(false)}
											/>
											<span className="ml-2">
												Individual
											</span>
										</label>
										<label className="inline-flex items-center ml-6">
											<input
												type="radio"
												className="form-radio"
												name="radioOption"
												defaultValue="B"
												onClick={() => setSelect(true)}
											/>
											<span className="ml-2">
												Company
											</span>
										</label>
									</div>
								</div>
							</div>
							{select === true ? (
								<>
									<div className="md:flex mb-6">
										<div className="md:w-1/3">
											<label
												className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
												htmlFor="my-textfield">
												Company Name :{" "}
												<label className="text-red-400">
													*
												</label>
											</label>
										</div>
										<div className="md:w-1/2">
											<input
												className="form-input block w-full border-2 p-2 border-gray-300 rounded-md "
												type="text"
												defaultValue="Company Name"
											/>
										</div>
									</div>
									<div className="md:flex mb-6">
										<div className="md:w-1/3">
											<label
												className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
												htmlFor="my-textfield">
												Company Registration No :{" "}
												<label className="text-red-400">
													*
												</label>
											</label>
										</div>
										<div className="md:w-1/2">
											<input
												className="form-input block w-full border-2 p-2 border-gray-300 rounded-md "
												type="text"
												defaultValue="Company Registration No"
											/>
										</div>
									</div>
								</>
							) : (
								""
							)}

							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									<label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-select">
										City :{" "}
										<label className="text-red-400">
											*
										</label>
									</label>
								</div>
								<div className="md:w-1/2">
									<select
										name=""
										className="form-select block w-full  border-2 p-2 border-gray-300 rounded-md"
										id="my-select">
										<option value="Default">Default</option>
										<option value="A">A</option>
										<option value="B">B</option>
										<option value="C">C</option>
									</select>
								</div>
							</div>

							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									<label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-checkbox">
										Residential Type :
										<label className="text-red-400">
											*
										</label>
									</label>
								</div>
								<div className="md:w-2/3">
									<div>
										<label className="inline-flex items-center">
											<input
												type="radio"
												className="form-radio"
												name="radioOption"
												defaultValue="B"
											/>
											<span className="ml-2">
												Housing
											</span>
										</label>
									</div>
									<div>
										<label className="inline-flex items-center">
											<input
												type="radio"
												className="form-radio"
												name="radioOption"
												defaultValue="B"
											/>
											<span className="ml-2">
												Business Tower
											</span>
										</label>
									</div>
									<div>
										<label className="inline-flex items-center">
											<input
												type="radio"
												className="form-radio"
												name="radioOption"
												defaultValue="B"
											/>
											<span className="ml-2">
												Residence
											</span>
										</label>
									</div>

									<div>
										<label className="inline-flex items-center">
											<input
												type="radio"
												className="form-radio"
												name="radioOption"
												defaultValue="B"
											/>
											<span className="ml-2">Others</span>
										</label>
									</div>
								</div>
							</div>

							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									<label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-textarea">
										Address :{" "}
										<label className="text-red-400">
											*
										</label>
									</label>
								</div>
								<div className="md:w-1/2">
									<textarea
										className="form-textarea block w-full  border-2  border-gray-300 rounded-md"
										id="my-textarea"
										rows={2}
									/>
								</div>
							</div>

							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									<label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-textfield">
										Email:{" "}
										<label className="text-red-400">
											*
										</label>
									</label>
								</div>
								<div className="md:w-1/2">
									<input
										className="form-input block w-full border-2 p-2 border-gray-300 rounded-md "
										type="text"
										defaultValue="Email"
									/>
								</div>
							</div>

							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									<label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-textfield">
										Telephone/Mobile :{" "}
										<label className="text-red-400">
											*
										</label>
									</label>
								</div>
								<div className="md:w-1/2">
									<input
										className="form-input block w-full border-2 p-2 border-gray-300 rounded-md "
										type="text"
										defaultValue="01xxxxxxx"
									/>
								</div>
							</div>

							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									<label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-select">
										Service Plan :{" "}
										<label className="text-red-400">
											*
										</label>
									</label>
								</div>
								<div className="md:w-1/2">
									<select
										name=""
										className="form-select block w-full  border-2 p-2 border-gray-300 rounded-md"
										id="my-select">
										<option value="Default">Default</option>
										<option value="A">A</option>
										<option value="B">B</option>
										<option value="C">C</option>
									</select>
								</div>
							</div>

							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									{/* <label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-select">
										Service Plan :{" "}
										<label className="text-red-400">
											*
										</label>
									</label> */}
								</div>
								<div className="md:w-1/2">
									<select
										name=""
										className="form-select block w-full  border-2 p-2 border-gray-300 rounded-md"
										id="my-select"
										disabled>
										<option value="Default">
											{state.speed}
										</option>
										<option value="A">A</option>
										<option value="B">B</option>
										<option value="C">C</option>
									</select>
								</div>
							</div>

							<div className="md:flex mb-6">
								<div className="md:w-1/3">
									{/* <label
										className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
										htmlFor="my-select">
										Service Plan :{" "}
										<label className="text-red-400">
											*
										</label>
									</label> */}
								</div>
								<div className="md:w-1/2">
									<select
										name=""
										className="form-select block w-full  border-2 p-2 border-gray-300 rounded-md"
										id="my-select">
										<option value="Default">Default</option>
										<option value="A">A</option>
										<option value="B">B</option>
										<option value="C">C</option>
									</select>
								</div>
							</div>

							<div className="md:flex md:items-center">
								<div className="md:w-1/3" />
								<div className="md:w-2/3">
									<button
										className="shadow bg-indigo-700 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded-lg"
										type="button">
										Continue
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PackageForm;
