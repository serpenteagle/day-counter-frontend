import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { animated, useSpring, useTransition, config } from "react-spring";

import C from "../../CONSTANTS.js";
import DaysDisplay from "./DaysDisplay.js";
import SinceTill from "./SinceTill.js";
import Closed from "./Closed.js";
import Open from "./Open.js"

const EnterKeyframes = keyframes`
	from: {
		/* transform: translate3d(0px,0px,10px); */
		opacity: 0;
	}
	to {
		/* transform: translate3d(0px,0px,0px); */
		opacity: 1;
	}
`;

const Card = styled.div`
	width: 700px;
	height: 200px;
	border-radius: 24px;
	background-color: ${C.COLOR_1};
	animation: ${EnterKeyframes} 0.5s forwards;
`;

const AnimatedCard = animated(Card);

// const T1 = styled.div`
// 	height: 200px;
// 	width: 200px;
// 	background-color: red;
// `;
// const T2 = styled.div`
// 	height: 200px;
// 	width: 200px;
// 	background-color: blue;
// `;
// const AnimatedT1 = animated(T1);
// const AnimatedT2 = animated(T2);

// const AnimatedClosed = animated(Closed);

const Wrapper = styled.div`
	position: relative;
	height: 215px;
	width: 700px;
	margin-bottom: 30px;
`;

const CounterCard = props => {
	const [open, setOpen] = useState(false);
	const [top, setTop] = useState(null);
	const cardRef = useRef(null);

	const CardSpringConfig = { mass: 1, tension: 350, friction: 25 };
	const CardSpring = useSpring({
		transform: open
			? `translate3d(0px, ${window.innerHeight / 2 - 200 - top}px, 10px)`
			: `translate3d(0px, 0px, 0px)`,
		height: open ? "400px" : "215px",
		config: name =>
			name === "transform" && !open
				? { ...CardSpringConfig, clamp: true }
				: CardSpringConfig
	});

	// const ComponentTransitions = useTransition(open, null, {
	// 	from: { position: "fixed", opacity: 0 },
	// 	enter: { opacity: 1 },
	// 	leave: { opacity: 0 }
	// });

	return (
		<Wrapper>
			<AnimatedCard
				{...props}
				style={CardSpring}
				ref={cardRef}
				onClick={() => {
					setTop(cardRef.current.getBoundingClientRect().top);
					setOpen(!open);
				}}
			>
				{/* {ComponentTransitions.map(({ item, key, props }) =>
					item ? (
						<AnimatedT2 key={key} style={props} />
					) : (
						<AnimatedClosed key={key} days={0} style={props} />
					)
				)} */}

				{open ? <Open /> : <Closed />}
			</AnimatedCard>
		</Wrapper>
		// <Card {...props}>{props.children}</Card>
	);
};

export default CounterCard;
