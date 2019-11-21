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

  :hover {
    cursor: pointer;
  }
`;
const Icon = styled.img`
	transform-origin: center;
  width: 48px;
  /* filter: brightness(200%); */
`;
const AnimatedIcon = animated(Icon);

const NavbarItem = props => {

  const iconSpring = useSpring({
    transform: `scale(${props.selected ? 1.3 : 1})`,
    // filter: props.selected ? 'brightness(200%)' : 'brightness(100%)',
    config: config.stiff
  })

	return (
		<IconContainer selected={props.selected}>
			<AnimatedIcon style={iconSpring} src={props.icon} />
      {/* <span dangerouslySetInnerHTML={{__html: props.icon}} /> */}
		</IconContainer>
	);
};

export default NavbarItem;
