import React, { useState } from "react";
import styled from "styled-components";
import CONSTANTS from "./CONSTANTS.js";

import Navbar from "./components/Navbar/Navbar.js";
import NavbarItem from "./components/Navbar/NavbarItem.js";
import ViewSlider from "./components/ViewSlider/ViewSlider.js";
// import Gridbox from "./components/Gridbox/Gridbox.js";
import ScrollBox from "./components/ScrollBox/ScrollBox.js";

import accountIcon from "./assets/account-circle.svg";
import dashboardIcon from "./assets/dashboard.svg";

const Viewport = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${CONSTANTS.COLOR_BG};
	display: flex;
`;
const ViewArea = styled.div`
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

const GridItem = styled.div`
	height: 300px;
	width: 350px;
	background-color: #5a5a5a;
	border-radius: 20px;
`;
const GridboxWrapper = styled.div`
	height: 100%;
	width: 75%;
	/* background-color: purple; */
	margin: 0 auto;
`;
const LongBoi = styled.div`
	width: 50%;
	height: 200%;
	background-color: purple;
`;

const App = () => {
	const [view, setView] = useState(1);

	return (
		<Viewport>
			<Navbar onChange={setView}>
				<NavbarItem icon={accountIcon} />
				<NavbarItem icon={dashboardIcon} />
			</Navbar>

			<ViewArea>
				<ViewSlider value={view}>
					<View>
						{/* <GridboxWrapper>
							<Gridbox>
								<GridItem />
								<GridItem />
								<GridItem />
								<GridItem />
								<GridItem />
								<GridItem />
							</Gridbox>
            </GridboxWrapper> */}
						<ScrollBox>
							<LongBoi />
						</ScrollBox>
						<View></View>
					</View>
				</ViewSlider>
			</ViewArea>
		</Viewport>
	);
};

export default App;
