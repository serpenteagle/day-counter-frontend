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
	const [active, setActive] = useState(null);

	// TODO replace inline styles for dynamic opacity with styled-components.

	return (
		<ScrollBox>
			<Flipper flipKey={counters}>
				{counters.map(counter => (
					<Flipped key={counter} flipId={counter}>
						{/* <Test key={counter} /> */}
						<div
							onClick={() => setActive(counter)}
							style={{ opacity: counter === active || !active ? "1" : ".25" }}
						>
							<CounterCard key={counter} onClose={() => setActive(null)}>{counter}</CounterCard>
						</div>
					</Flipped>
				))}

				<Flipped flipId={"add"}>
					<div>
						<AddCard
							style={{ opacity: !active ? "1" : ".25" }}
							onClick={() => setCounters([...counters, shortid.generate()])}
						/>
					</div>
				</Flipped>
			</Flipper>
		</ScrollBox>
	);
};

export default CounterList;
