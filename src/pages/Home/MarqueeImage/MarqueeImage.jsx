import React from "react";
import Marquee from "react-fast-marquee";
import { MarqueeImage1 } from "../../../Image";

const MarqueeImage = () => {
	return (
		<div>
			<h1 className="text-center text-3xl my-5 font-bold ">
				Our Technology partner
			</h1>
			<Marquee
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
					{MarqueeImage1.map((u) => {
						return (
							<div
								key={u.path}
								className="max-w-screen-2xl mx-auto">
								<img
									src={u.path}
									alt=""
									className="h-20 mx-5"
								/>
							</div>
						);
					})}
				</div>
			</Marquee>
		</div>
	);
};

export default MarqueeImage;
