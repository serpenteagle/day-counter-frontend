import React from "react";
import styled from "styled-components";

import C from '../../CONSTANTS.js'

const Text = styled.h2`
  font-size: 65px;
  color: ${C.COLOR_4};
  margin: 0;
  font-family: 'Avenir Next';
  
`;

const DaysDisplay = props => {
	return (
		<Text>{`${Math.abs(props.days)} ${
			Math.abs(props.days) === 1 ? "day" : "days"
		}`}</Text>
	);
};

export default DaysDisplay;
