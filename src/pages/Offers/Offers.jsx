import React from "react";
import image from "../../assets/image/5.jpg";
import image1    from "../../assets/image/offer.jpg";

const Offers = () => {
	return (
		<>
			<div
				className="hero h-[400px]  "
				style={{
					backgroundImage: `url(${image1})`,
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div
					className="hero-content text-center text-white"
					data-aos="fade-up">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl  font-bold">
							Special Offer
						</h1>
						
					</div>
				</div>
			</div>

			<div className="hero ">
				<div className="hero-content flex-col lg:flex-col-reverse">
					<img
						src={image}
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-xl">
							<h1 className="text-4xl text-info-content font-bold">
								SPECIAL OFFER
							</h1>
							<p className="py-3 text-info-content">
								Enjoy a free connection charge with Stargate
								Internet on your initial connection. The offer
								is available till December 31st.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Offers;
