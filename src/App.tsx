import styled from "@emotion/styled";
import { useState } from "react";
import BodyWrapper from "./components/BodyWrapper";
import BoredBox from "./components/BoredBox";
import ButtonContainer from "./components/ButtonContainer";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import GenerateIcon from "/assets/generate.svg";
import DesertImg from "/assets/images/desert.jpg";

import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";

const Section = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	width: fit-content;
	margin: 0 auto;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const Image = styled.img`
	display: none;
	@media (min-width: 768px) {
		display: block;
		border-radius: 90px 90px 5px 5px;
		width: 250px;
		height: 350px;
	}
`;

type FactType = "daily" | "random";

function App() {
	const [selectedFact, setSelectedFact] = useState<FactType>("daily");
	const [randomClickCount, setRandomClickCount] = useState(0);

	const buttons = [
		{
			text: "Today's fact",
			onClick: () => {
				setSelectedFact("daily");
			},
			className: selectedFact === "daily" ? "selectedButton" : "",
			icon: null,
		},
		{
			text: "Random fact",
			onClick: () => {
				setSelectedFact("random");
				setRandomClickCount((prevCount) => prevCount + 1);
			},
			className: selectedFact === "random" ? "selectedButton" : "",
			icon: selectedFact === "random" && GenerateIcon,
		},
	];
	return (
		<>
			<Header />
			<Section>
				<DarkModeToggle />
				<Image className="desert" src={DesertImg} alt="desert" />
				<BodyWrapper>
					<ButtonContainer buttons={buttons} />
					<FactBox {...{ selectedFact, randomClickCount }} />
				</BodyWrapper>
			</Section>
			{randomClickCount >= 5 && <BoredBox />}
		</>
	);
}

export default App;
