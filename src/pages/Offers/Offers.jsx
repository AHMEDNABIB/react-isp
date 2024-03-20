import React from "react";
import image from "../../assets/image/offer.jpeg";

const Offers = () => {
	return (
		<>
			<div className="hero  h-[200px] bg-[#f4f4f5]  ">
				<div className="hero-content text-center text-white">
					<div className="max-w-md">
						<h1 className="mb-5  text-4xl text-[#333be6]  font-bold">
							SPECIAL OFFER
						</h1>
					</div>
				</div>
			</div>

			<div className="hero ">
				<div className="hero-content flex-col lg:flex-col-reverse">
					<img
						src={image}
						className="max-w-sm h-[480px] rounded-lg shadow-2xl"
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
