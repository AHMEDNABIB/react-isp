import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdEmail, MdOutlinePerson2 } from "react-icons/md";
import "./Tabs.css";

const Tabs = () => {
	const [currentTab, setCurrentTab] = useState("1");
	const tabs = [
		{
			id: 1,
			tabTitle: "Our Mission",
			title: "FaHome",
			content:
				"We Enjoy long–term and trusted business relationship with major telecom and broadband service providers of Bangladesh ",
		},
		{
			id: 2,
			tabTitle: "Our Vision",

			content:
				"We trust you with highly reliable, multiple ring architecture,24 / 7 NOC Support. Join with us. We will serve you the best.",
		},
		{
			id: 3,
			tabTitle: "Our Value",

			content:
				"Our value lies with our customers. we have 20 + years of experience.",
		},
	];

	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	};

	return (
		<div className="containerTabs ">
			<div className="tabsNo  ">
				{tabs.map((tab, i) => (
					<button
						className="flex items-center "
						key={i}
						id={tab.id}
						disabled={currentTab === `${tab.id}`}
						onClick={handleTabClick}>
						{tab.tabTitle === "Our Mission" ? (
							<FaHome className="mx-1 text-lg" />
						) : (
							""
						)}
						{tab.tabTitle === "Our Vision" ? (
							<MdOutlinePerson2 className="mx-1 text-lg" />
						) : (
							""
						)}
						{tab.tabTitle === "Our Value" ? (
							<MdEmail className="mx-1 text-lg " />
						) : (
							""
						)}

						{/* {tab.tabTitle} */}

						{tab.tabTitle}
					</button>
				))}
			</div>
			<div className="contentNo">
				{tabs.map((tab, i) => (
					<div key={i}>
						{currentTab === `${tab.id}` && (
							<div>
								<p>{tab.content}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;
