import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar/Navbar.js";
import NavbarItem from "./components/Navbar/NavbarItem.js";

import accountIcon from "./assets/account-circle.svg";
import dashboardIcon from "./assets/dashboard.svg";

const Viewport = styled.div`
	height: 100%;
	width: 100%;
	background-color: #313131;
`;

const App = () => {
	return (
		<Viewport>
			<Navbar onChange={val => console.log(val)}>
				<NavbarItem icon={accountIcon} />
				<NavbarItem icon={dashboardIcon} />
			</Navbar>
		</Viewport>
	);
};

export default App;
