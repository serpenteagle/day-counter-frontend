import React, { useState } from "react";
import styled from "styled-components";
import CONSTANTS from "./CONSTANTS.js";

import Navbar from "./components/Navbar/Navbar.js";
import NavbarItem from "./components/Navbar/NavbarItem.js";
import ViewSlider from "./components/ViewSlider/ViewSlider.js";
import CounterList from "./components/CounterList/CounterList.js";
import SignIU from "./components/SignIU/SignIU.js";
import accountIcon from "./assets/account-circle.svg";
import dashboardIcon from "./assets/dashboard.svg";

const Viewport = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${CONSTANTS.COLOR_BG};
	display: flex;
	perspective: 30in;
	transform-style: preserve-3d;
	transform-origin: center;
	* {
		perspective: 18in;
		transform-style: preserve-3d;
		transform-origin: center;
	}
`;
const ViewSliderContainer = styled.div`
	flex-basis: 100%;
	position: relative;
`;

const View = styled.div`
	height: calc(100% - 20px);
	width: calc(100% - 20px);
	transform: translateX(10px) translateY(10px);
	/* background-color: #5a5a5a; */
	border-radius: 20px;
`;

const CounterListContainer = styled.div`
	width: 780px;
	height: 100%;
	margin: 0 auto;
`;

const CounterCardContainer = styled.div`
	width: 700px;
	height: 215px;
	transform-style: preserve-3d;
	overflow: visible;
`;

const Divider = styled.div`
	height: 100%;
	width: 30px;
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 2%) 50%,
		rgba(0, 0, 0, 10%) 50% 100%
	);
	display: inline-block;
`;

const App = () => {
	const [view, setView] = useState(1);

	return (
		<Viewport>
			<Navbar onChange={setView}>
				<NavbarItem icon={accountIcon} />
				<NavbarItem icon={dashboardIcon} />
			</Navbar>

			{/* <Divider /> */}

			<ViewSliderContainer>
				<ViewSlider value={view}>
					<View
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<SignIU />
					</View>
					<View>
						<CounterListContainer>
							<CounterList />
						</CounterListContainer>
					</View>
				</ViewSlider>
			</ViewSliderContainer>
		</Viewport>
	);
};

export default App;
