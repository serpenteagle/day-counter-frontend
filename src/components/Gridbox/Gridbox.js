import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  /* overflow-y: scroll; */
`;
const Grid = styled.div`
	display: grid;
	/* background-color: blue; */
	grid-auto-flow: row;
	grid-template-columns: 400px 400px;
	grid-template-rows: 350px 350px;
	justify-items: center;
	align-items: center;
`;

const Gridbox = props => {
	return (
		<Wrapper>
			<Grid>{props.children}</Grid>
		</Wrapper>
	);
};

export default Gridbox;
