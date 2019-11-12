import React, { useState } from "react";
import styled from "styled-components";
import CONSTANTS from "./CONSTANTS.js";

import Navbar from "./components/Navbar/Navbar.js";
import NavbarItem from "./components/Navbar/NavbarItem.js";
import ViewSlider from "./components/ViewSlider/ViewSlider.js";
// import Gridbox from "./components/Gridbox/Gridbox.js";
import ScrollBox from "./components/ScrollBox/ScrollBox.js";
import CounterCard from "./components/CounterCard/CounterCard.js";

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

const ScrollBoxContainer = styled.div`
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

const App = () => {
	const [view, setView] = useState(1);

	return (
		<Viewport>
			<Navbar onChange={setView}>
				<NavbarItem icon={accountIcon} />
				<NavbarItem icon={dashboardIcon} />
			</Navbar>

			<ViewSliderContainer>
				<ViewSlider value={view}>
					<View>
						<ScrollBoxContainer>
							<ScrollBox>
								{/* <CounterCardContainer> */}
									<CounterCard />
								{/* </CounterCardContainer> */}
							</ScrollBox>
						</ScrollBoxContainer>
					</View>
					<View></View>
				</ViewSlider>
			</ViewSliderContainer>
		</Viewport>
	);
};

export default App;
