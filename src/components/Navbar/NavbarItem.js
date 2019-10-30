import React from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";

const IconContainer = styled.div`
	/* background-color: ${props => (props.selected ? "green" : "red")}; */
	height: 100%;
	width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
	transform-origin: center;
  width: 48px;
`;
const AnimatedIcon = animated(Icon);

const NavbarItem = props => {

  const iconSpring = useSpring({
    transform: `scale(${props.selected ? 1.3 : 1})`,
    config: config.stiff
  })

	return (
		<IconContainer selected={props.selected}>
			<AnimatedIcon style={iconSpring} src={props.icon} />
		</IconContainer>
	);
};

export default NavbarItem;
