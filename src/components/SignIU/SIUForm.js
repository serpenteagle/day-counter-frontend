import React from "react";
import styled from "styled-components";

import C from "../../CONSTANTS.js";

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: 1fr auto auto auto auto 1fr;
	grid-template-columns: 1fr auto auto 1fr;
	grid-gap: 34px 34px;
	grid-template-areas:
		". . . ."
		". label-1 input-1 ."
		". label-2 input-2 ."
		". . button-1 ."
		". . button-2 ."
		". . . .";
`;

const Label = styled.div`
	font-size: 51px;
	color: ${C.COLOR_2};
	font-family: "Avenir Next";
	font-weight: bold;
	justify-self: end;
`;

const TextBox = styled.input`
	height: 76px;
	width: 368px;
	background-color: ${C.COLOR_2};
	border-radius: 21px;
	border: none;
	font-size: 26px;
	color: ${C.COLOR_4};
	font-family: "Avenir Next";
	font-weight: bold;
	text-align: center;

	:focus {
		outline: none;
	}
`;

const SubmitButton = styled.button`
	height: 78px;
	width: 368px;
	background-color: red;
	font-family: "Avenir Next";
	font-weight: bold;
	text-align: center;
	border-radius: 21px;
	border: none;
`;

const SIUForm = props => {
	return (
		<Container>
			<TextBox style={{ gridArea: "input-1" }} />
			<Label style={{ gridArea: "label-1" }}>Email</Label>
			<TextBox type="password" style={{ gridArea: "input-2" }}></TextBox>
			<Label style={{ gridArea: "label-2" }}>Password</Label>
			<SubmitButton style={{ gridArea: "button-1" }}>Sign In</SubmitButton>
		</Container>
	);
};

export default SIUForm;
