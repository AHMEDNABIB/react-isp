import "animate.css";
import React, { useEffect, useState } from "react";
import { image } from "../../../data/data-image"
import AOS from "aos";
import "aos/dist/aos.css";


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

	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 500,
		});
	}, []);

	return (
	

		<div className="carousel w-full h-[350px] lg:h-[800px]">
			{image.map((u, i) => {
				return (
					cur == i && (
						<div
							id="slide1"
							className="carousel-item relative w-full  ">
							<img src={u.path} className="lg:w-full " />
							{/* <div className="absolute flex items-center  h-full left-0 px-20 top-0  ">
								<div
									className=" pl-12 space-y-7"
									data-aos="fade-up">
									<h2 className="lg:text-5xl text-lg  font-bold lg:w-2/3">
										{u.title}
									</h2>
									<p className="lg:w-1/2 text-sm lg:text-lg ">
										{u.des}
									</p>
									<div>
										<button className="  btn btn-primary rounded-full mr-5 ">
											{u.btnName}
										</button>
									</div>
								</div>
							</div> */}

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
