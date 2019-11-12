import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";

import C from "../../CONSTANTS.js";

const Card = styled.div`
	width: 700px;
	border-radius: 24px;
	background-color: ${C.COLOR_1};
`;

const AnimatedCard = animated(Card);

const CounterCard = props => {
	const [open, setOpen] = useState(false);

	const CardSpringConfig = { mass: 1, tension: 350, friction: 25};
	const CardSpring = useSpring({
		transform: open
			? "translate3d(0px,0px,10px)"
			: "translate3d(0px, 0px, 0px)",
		height: open ? "500px" : "215px",
		config: name =>
			name === "transform" && !open
				? { ...CardSpringConfig, clamp: true }
				: CardSpringConfig
	});

	return <AnimatedCard style={CardSpring} onClick={() => setOpen(!open)} >
		
	</AnimatedCard>;
};

export default CounterCard;
