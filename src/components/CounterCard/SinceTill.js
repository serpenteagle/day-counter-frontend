import React from "react";
import styled from "styled-components";

import C from "../../CONSTANTS.js";

const Text = styled.h3`
	font-size: 29px;
	color: ${C.COLOR_3};
	margin: 0;
	font-family: "Avenir Next";
`;

const SinceTill = props => {
	return (
		<Text>
			{props.days > 0 ? "till" : "since"} {props.children}
		</Text>
	);
};

export default SinceTill;
