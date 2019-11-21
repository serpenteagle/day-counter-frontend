import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import CONSTANTS from "../../CONSTANTS.js";

const Bar = styled.div`
	display: inline-block;
	width: 130px;
	height: calc(100% - 60px);
	/* height: 100%; */
	/* TODO: Find a different solution from using transforms in order to prevent animation conflicts */
	/* transform: translateX(10px) translateY(10px); */
	margin: 30px 50px 30px 50px;
	background-color: ${CONSTANTS.COLOR_1};
	border-radius: 21px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Selector = styled.div`
	height: calc(100% / ${props => props.count});
	width: 100%;
	/* height: calc(100% / ${props => props.count} - 22px); */
	/* width: calc(100% - 20px); */
	/* margin: 10px; */
	position: absolute;
	background-color: ${CONSTANTS.COLOR_2};
	border-radius: 15px;
	pointer-events: none;
	z-index: 0;
`;

const AnimatedSelector = animated(Selector);

const ItemWrapper = styled.div`
	padding: 10px;
	background-clip: content-box;
	flex-grow: 1;
	position: relative;
	z-index: 1;
`;

// TODO: Implement logic to update when window is resized.
const Navbar = props => {
	const [selection, setSelection] = useState(0);
	const [stride, setStride] = useState(null);

	useEffect(() => props.onChange(selection), [selection]);

	const measuredRef = useCallback(node => {
		if (node !== null) {
			const height = node.getBoundingClientRect().height;
			const count = props.children.length;
			setStride(height / count);
		}
	}, []);

	const SelectorSpring = useSpring({
		from: { transform: "translate3d(0,0px,0)" },
		transform: `translate3d(0,${stride * selection}px, 0)`,
		config: { mass: 1, tension: 400, friction: 30 }
	});

	return (
		<Bar ref={measuredRef}>
			{/* {React.Children.map(props.children, (v, i) => (
				<NavbarItem
					key={i}
					onClick={() => {
						setSelection(i);
					}}
				/>
			))} */}
			{React.Children.map(props.children, (child, index) => {
				return (
					<ItemWrapper onClick={() => setSelection(index)}>
						{React.cloneElement(child, { selected: selection === index })}
					</ItemWrapper>
				);
			})}
			<AnimatedSelector style={SelectorSpring} count={props.children.length} />
		</Bar>
	);
};

export default Navbar;
