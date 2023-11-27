import React from 'react';
import CountUp from "react-countup";




const Client = () => {
    return (
		<div className="w-screen-5xl">
			<div className="hero py-12   bg-[#fff]">
				<div className="hero-content flex-col md:flex-col">
					<div className="flex flex-row flex-wrap justify-center my-16  gap-5 w-fit ">
						<div className="items-center text-center    ">
							<div className="card w-96 bg-base-100 border-2 rounded-none  duration-1000 transform hover:scale-110">
								<div className="card-body">
									<h3 className="text-xl font-semibold">
										<CountUp
											end={25}
											delay={2}
											// duration={4}
										/>
										+
									</h3>
									<h3 className="text-xl font-semibold">
										Franchise Partners
									</h3>
								</div>
							</div>
						</div>

						<div className="items-center text-center  mx-5   ">
							<div className="card w-96 bg-base-100 border-2 rounded-none  duration-1000 transform hover:scale-110">
								<div className="card-body">
									<h3 className="text-xl font-semibold">
										<CountUp
											end={2500}
											delay={2}
											// duration={4}
										/>
										+
									</h3>
									<h3 className="text-xl font-semibold">
										HAPPY CUSTOMERS
									</h3>
								</div>
							</div>
						</div>

						<div className="items-center text-center   ">
							<div className="card w-96 bg-base-100 border-2 rounded-none  duration-1000 transform hover:scale-110">
								<div className="card-body">
									<h3 className="text-xl font-semibold">
										<CountUp
											end={20}
											delay={2}
											// duration={4}
										/>
										+
									</h3>
									<h3 className="text-xl font-semibold">
										Experience in years
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Client;