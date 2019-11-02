import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";

const Container = styled.div`
	/* background-color: blue; */
	height: 100%;
	width: 100%;
`;
const AnimatedContainer = animated(Container);

const View = styled.div`
	/* background-color: red; */
	height: 100%;
	width: 100%;
  /* padding: 20px; */
  /* box-sizing: border-box; */
  /* background-clip: content-box; */
`;

const ViewSlider = props => {
	const [stride, setStride] = useState(null);

	const measuredRef = useCallback(node => {
		if (node !== null) {
			const height = node.getBoundingClientRect().height;
			const count = props.children.length;
			setStride(height);
		}
	}, []);

	const ContainerSpring = useSpring({
    transform: `translateY(-${stride * props.value}px)`,
    config: { mass: 1, tension: 400, friction: 30 }
	});

	return (
		<AnimatedContainer style={ContainerSpring} ref={measuredRef}>
			{React.Children.map(props.children, (child, index) => (
				<View key={index}>{child}</View>
			))}
		</AnimatedContainer>
	);
};

export default ViewSlider;
