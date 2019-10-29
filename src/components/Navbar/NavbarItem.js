import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
	background-color: ${props => (props.selected ? "green" : "red")};
	height: 100%;
	width: 100%;
`;

const NavbarItem = props => {
	return <IconContainer selected={props.selected} />;
};

export default NavbarItem;
