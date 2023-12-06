import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import CountUp from "react-countup";

const Client = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="w-screen-5xl">
			<div
				className="hero   bg-[#fff] "
				data-aos="fade-up-right"
				data-aos-duration="1000">
				<div className="hero-content flex-col md:flex-col">
					<div className="flex flex-row flex-wrap justify-center my-16  gap-5 w-fit ">
						<div className="items-center text-center">
							<div className="card w-96 bg-base-100 border-2 rounded-none  duration-1000 transform hover:scale-110">
								<div className="card-body">
									<h3 className="text-xl font-semibold">
										<CountUp
											end={500}
											delay={2}
											// duration={4}
										/>
										+
									</h3>
									<h3 className="text-xl font-semibold">
										Corporate Client
									</h3>
								</div>
							</div>
						</div>

						<div className="items-center text-center  mx-5   ">
							<div className="card w-96 bg-base-100 border-2 rounded-none  duration-1000 transform hover:scale-110">
								<div className="card-body">
									<h3 className="text-xl font-semibold">
										<CountUp
											end={20000}
											delay={2}
											// duration={4}
										/>
										+
									</h3>
									<h3 className="text-xl font-semibold">
										Home Internet User
									</h3>
								</div>
							</div>
						</div>

						<div className="items-center text-center   ">
							<div className="card w-96 bg-base-100 border-2 rounded-none  duration-1000 transform hover:scale-110">
								<div className="card-body">
									<h3 className="text-xl font-semibold">
										<CountUp
											end={14}
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
