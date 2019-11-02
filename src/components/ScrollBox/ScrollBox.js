import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import CONSTANTS from "../../CONSTANTS.js";

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	background-color: red;
`;

const Box = styled.div`
	height: 100%;
	width: 100%;
	background-color: blue;
	overflow-y: scroll;
`;
const EdgeBar = styled.div`
	position: absolute;
	height: 10px;
	width: 100%;
	border-radius: 5px;
	background-color: ${CONSTANTS.COLOR_2};
	top: ${props => (props.top ? "0" : "")};
	bottom: ${props => (props.bottom ? "0" : "")};
	opacity: ${props => (props.visible ? "1" : "0")};
	transition-property: opacity;
	transition-duration: 0.5s;
`;

const ScrollBox = props => {
	const boxRef = useRef(null);

	const [overflow, setOverflow] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const { scrollHeight, scrollTop, clientHeight } = boxRef.current;

		setOverflow(scrollHeight == clientHeight);
		setScrollTop(scrollTop);

		console.log(overflow);
		
	}, [boxRef.current]);

	return (
		<Wrapper>
			<EdgeBar top visible={!(overflow && scrollTop !== 0)} />
			<EdgeBar bottom visible={!(overflow && scrollTop === 0)} />
			<Box ref={boxRef}>{props.children}</Box>
		</Wrapper>
	);
};

export default ScrollBox;
