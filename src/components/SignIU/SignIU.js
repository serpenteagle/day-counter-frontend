import React, { useState } from "react";
import styled from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";

import C from "../../CONSTANTS.js";

import SIUForm from "../SignIU/SIUForm.js";

const Container = styled.div`
	height: ${({ height }) => height || "607px"};
	width: ${({ width }) => width || "1020px"};
	/* background-color: ${C.COLOR_2}; */
	display: grid;
  grid-template-rows: auto;
  grid-template-columns: ${({ state }) => {
		switch (state) {
			case 0:
				return "1fr 1fr";
				break;
			case 1:
				return "auto 100px";
				break;
			case 2:
				return "100px auto";
				break;
			case 3:
				return "auto 0px";
				break;
			default:
				break;
		}
	}};
  grid-gap: ${({ state }) => (state === 3 ? "none" : "63px")};
`;

const Pane = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${C.COLOR_1};
	border-radius: 21px;
	overflow: hidden;
`;

const TitleText = styled.h2`
	font-size: 51px;
	color: ${C.COLOR_2};
	font-family: "Avenir Next";
	font-weight: bold;
	transform-origin: center;
	/* transform: rotate(90deg); */
`;

const SignIU = props => {
	const [state, setState] = useState(0);

	return (
		<Flipper flipKey={state} spring={{ stiffness: 450, damping: 30 }}>
			<Container state={state}>
				<Flipped flipId={"up-pane"}>
					<Pane onClick={() => setState(1)}>
						{state === 1 ? <SIUForm /> : <TitleText>Sign Up</TitleText>}
					</Pane>
				</Flipped>
				<Flipped flipId={"in-pane"}>
					<Pane onClick={() => setState(3)}>Sign In</Pane>
				</Flipped>
			</Container>
		</Flipper>
	);
};

export default SignIU;
