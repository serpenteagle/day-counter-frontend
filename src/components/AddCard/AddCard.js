import React from "react";
import styled from "styled-components";

import C from "../../CONSTANTS.js";

const Card = styled.div`
	width: 700px;
	height: 65px;
	border-radius: 24px;
	background-color: ${C.COLOR_1};
`;

const AddCard = (props) => {
	return (
		<Card {...props} onClick={props.onClick}>
			Add
		</Card>
	);
};

export default AddCard;
