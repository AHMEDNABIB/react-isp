import React from "react";
import Marquee from "react-fast-marquee";
import { marqueeImage1 } from "../../../data/data-image";

const MarqueeImage = () => {
	return (
		<div
			className="p-6 bg-base-200"
			data-aos="fade-left"
			data-aos-easing="linear"
			data-aos-duration="1500">
			<h1 className="text-center text-4xl my-5 pb-6 font-bold ">
				Our Technology Partner
			</h1>

			<div className="p-10">
				<Marquee
					gradient
					style={{
						width: "1500px",
						position: "absoloute",
						margin: "auto",
						left: "0",
						right: "0",
						top: "0",
						bottom: "0",
					}}>
					<div className="flex  ">
						{marqueeImage1.map((u) => {
							return (
								<div
									key={u.path}
									className="max-w-screen-2xl mx-auto">
									<img
										src={u.path}
										alt=""
										className="h-20 w-32 mx-3 "
									/>
								</div>
							);
						})}
					</div>
				</Marquee>
			</div>
		</div>
	);
};

export default MarqueeImage;
