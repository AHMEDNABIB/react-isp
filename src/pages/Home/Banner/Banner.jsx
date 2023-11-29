import "animate.css";
import React, { useEffect, useState } from "react";
// import { Image } from "../../../Image";

import {image} from "../../../data/data-image"

const Banner = () => {
	const [cur, setCur] = useState(0);
	const lengthArr = image.length - 1;

	const pre = () => {
		console.log(lengthArr);
		setCur(cur === 0 ? lengthArr : cur - 1);
	};

	const next = () => {
		
		setCur(cur === lengthArr ? 0 : cur + 1);

		

	};

	useEffect(() => {
		const sliderrun = setInterval(() => {
			next();
		}, 5000);
		return () => {
			clearInterval(sliderrun);
		};
	}, [cur]);

	useEffect(() => {
		setCur(0);
	}, []);

	return (
	

		<div className="carousel w-full h-[800px]">
			{image.map((u, i) => {
				return (
					cur == i && (
						<div
							id="slide1"
							className="carousel-item relative w-full  ">
							<img src={u.path} className="w-full" />
							<div className="absolute rounded-xl flex items-center h-full left-0 px-20 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
								<div className="text-white pl-12 space-y-7">
									<h2 className="text-6xl font-bold w-1/2  animate__animated animate__fadeIn">
										{u.title}
									</h2>
									<p className="w-1/2 animate__animated animate__fadeIn">
										{u.des}
									</p>
									<div>
										<button className="  btn btn-primary rounded-full mr-5 ">
											{u.btnName}
										</button>
									</div>
								</div>
							</div>

							<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
								<button
									onClick={() => pre()}
									className="btn btn-circle">
									❮
								</button>
								<button
									onClick={() => next()}
									className="btn btn-circle">
									❯
								</button>
							</div>
						</div>
					)
				);
			})}
		</div>
	);
};

export default Banner;
