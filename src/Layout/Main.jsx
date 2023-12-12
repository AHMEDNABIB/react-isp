import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
		<>
			{" "}
			<div className="max-w-screen-5xl bg-base-100  sticky top-0 z-50 mx-auto">
				<div className="max-w-screen-2xl mx-auto">
					<Navbar></Navbar>
				</div>
			</div>
			<div className="container-fluid">
				<Outlet></Outlet>
			</div>
			<div className="bg-neutral">
				<Footer></Footer>
			</div>
		</>
	);
};

export default Main;