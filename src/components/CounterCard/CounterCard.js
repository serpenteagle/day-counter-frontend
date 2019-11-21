import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring, useTransition, config } from "react-spring";

import C from "../../CONSTANTS.js";
// import DaysDisplay from "./DaysDisplay.js";
// import SinceTill from "./SinceTill.js";
import Closed from "./Closed.js";

const Card = styled.div`
	/* position: absolute; */
	width: 700px;
	border-radius: 24px;
	background-color: ${C.COLOR_1};
`;

const AnimatedCard = animated(Card);

// const T1 = styled.div`
// 	height: 200px;
// 	width: 200px;
// 	background-color: red;
// `;
const T2 = styled.div`
	height: 200px;
	width: 200px;
	background-color: blue;
`;
// const AnimatedT1 = animated(T1);
const AnimatedT2 = animated(T2);

const AnimatedClosed = animated(Closed);

const CounterCard = props => {
	const [open, setOpen] = useState(false);

	const CardSpringConfig = { mass: 1, tension: 350, friction: 25 };
	const CardSpring = useSpring({
		transform: open
			? "translate3d(0px,0px,10px)"
			: "translate3d(0px, 0px, 0px)",
		height: open ? "400px" : "215px",
		config: name =>
			name === "transform" && !open
				? { ...CardSpringConfig, clamp: true }
				: CardSpringConfig
	});

	const ComponentTransitions = useTransition(open, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 }
	});

	return (
		// <AnimatedCard style={CardSpring} onClick={() => setOpen(!open)}>
		// 	{ComponentTransitions.map(({ item, key, props }) =>
		// 		item ? (
		// 			<AnimatedT2 key={key} style={props} />
		// 		) : (
		// 			<AnimatedClosed key={key} days={0} style={props} />
		// 		)
		// 	)}
		// </AnimatedCard>
		<AnimatedCard onClick={() => setOpen(!open)}>
			{ComponentTransitions.map(({ item, key, props }) =>
				item ? (
					<AnimatedT2 key={key} style={props} />
				) : (
					<AnimatedClosed key={key} days={0} style={props} />
				)
			)}
		</AnimatedCard>
	);
};

export default CounterCard;
