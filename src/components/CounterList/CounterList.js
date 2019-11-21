import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import shortid from "shortid";
import { Flipper, Flipped } from "react-flip-toolkit";

import ScrollBox from "../ScrollBox/ScrollBox.js";
import CounterCard from "../CounterCard/CounterCard.js";
import AddCard from "../AddCard/AddCard.js";

const Test = styled.div`
	height: 200px;
	width: 300px;
	background-color: blue;
	outline: 5px solid black;
`;
const CounterList = props => {
	const [counters, setCounters] = useState([]);

	return (
		<ScrollBox>
			<Flipper flipKey={counters}>
				{counters.map(counter => (
					<Flipped key={counter} flipId={counter}>
						<Test key={counter} />
					</Flipped>
				))}

				<Flipped flipId={"add"}>
					<AddCard onClick={() => setCounters([shortid.generate(), ...counters])} />
				</Flipped>
			</Flipper>
		</ScrollBox>
	);
};

export default CounterList;
