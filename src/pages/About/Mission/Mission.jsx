import React from "react";
import image from "../../../assets/image/3.jpg";

const Mission = () => {
	return (
		<div className="lg:w-screen-5xl">
			<div className="hero">
				<div className="hero-content text-center">
					<div className="max-w-4xl">
						<h1 className="text-4xl font-bold">
							Our Mission: Smarter for Bangladesh
						</h1>
					</div>
				</div>
			</div>
			<div className="hero my-16   ">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={image}
						className="max-w-sm lg:max-w-2xl rounded-lg shadow-2xl"
					/>
					<div className="mx-8">
						<ul
							className="list-disc font-semibold "
							data-aos="fade-left">
							<li className="my-2">
								To penetrate all key areas of Bangladesh's fixed
								line and mobile network
							</li>
							<li className="my-2">
								To provide consumers with high-quality, Network
								Infrastructures, uninterrupted Internet Network
								infrastructure access
							</li>
							<li className="my-2">
								To support investment in the infrastructure in
								order to develop adequate communications
								connectivity for a Smart City
							</li>
							<li className="my-2">
								To focus on developing infrastructure to meet
								Smart City goals,
							</li>
							<li className="my-2">
								To provide smart solutions to businesses,
								residents and people of Bangladesh to excel in
								the smart city
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mission;
