import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";

const Bar = styled.div`
	width: 97px;
	height: calc(100% - 20px);
	/* TODO: Find a different solution from using transforms in order to prevent animation conflicts */
	transform: translateX(10px) translateY(10px);
	background-color: white;
	border-radius: 21px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Selector = styled.div`
	height: calc(100% / ${props => props.count});
	width: 100%;
	position: absolute;
	top: 0;
	background-color: rgba(20, 20, 20, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 15px;
	pointer-events: none;
`;
const AnimatedSelector = animated(Selector);

const ItemWrapper = styled.div`
	padding: 10px;
	background-clip: content-box;
	flex-grow: 1;
	position: relative;
`;

// TODO: Implement logic to update when window is resized.
const Navbar = props => {
	const [selection, setSelection] = useState(0);
	const [stride, setStride] = useState(null);

	const measuredRef = useCallback(node => {
		if (node !== null) {
			const height = node.getBoundingClientRect().height;
			const count = props.children.length;
			setStride(height / count);
		}
	}, []);

	const SelectorSpring = useSpring({
		from: { transform: "translateY(0px)" },
		transform: `translateY(${stride * selection})`,
		config: config.stiff
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
