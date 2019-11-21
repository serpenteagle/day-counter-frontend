import React from "react";
import styled from "styled-components";

import DaysDisplay from "./DaysDisplay.js";
import SinceTill from "./SinceTill.js";

const Container = styled.div`
	display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
	justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Closed = props => {
	return (
		<Container>
			<DaysDisplay />
			<SinceTill />
		</Container>
	);
};

export default Closed;
