import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const History = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="hero mt-16 bg-base-100">
			<div className="hero-content text-center p-10 shadow-xl">
				<div className="max-w-5xl">
					<h1 className="text-4xl font-bold ">
						STARGATE COMMUNICATIONS LTD.
					</h1>
					<div className="py-6">
						<p className="mb-3">
							Stargate pioneered the concept of providing smooth
							IT and Internet Service when clients were victim of
							interrupted service. We in fact have become the
							first company that led the people get information
							with latest network technology by in their finger
							tips in convenience and faster way by giving
							individuals and small businesses the ability to use
							Internet as a tool to make their lives more
							productive and their business more profitable.
							Stargate is continually developing a new and
							innovative suite of services that make it a faster,
							easier and smarter connectivity experience.
						</p>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default History;
