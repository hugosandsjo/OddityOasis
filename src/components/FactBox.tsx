import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { fetchFact } from "../services/api";

const FactBoxContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	text-align: left;
	padding: 1rem 0;
	@media (min-width: 768px) {
		width: 750px;
		padding: 0 2rem;
	}
`;

const Heading1 = styled.h1`
	font-size: 52px;
	font-weight: 300;
	line-height: 1.2;
	margin: 0;
	@media (min-width: 768px) {
		font-size: 78px;
	}
`;

const Paragraph = styled.p`
	font-size: 24px;
	line-height: 1.4;
	max-width: 750px;
	margin-top: 1rem;
	@media (min-width: 768px) {
		font-size: 32px;
	}
`;

interface FactBoxProps {
	selectedFact: string;
	randomClickCount: number;
}

function FactBox({ selectedFact, randomClickCount }: FactBoxProps) {
	const [randomFact, setRandomFact] = useState<string | null>(null);
	const [dailyFact, setDailyFact] = useState<string | null>(null);

	useEffect(() => {
		const setFact = async () => {
			if (selectedFact === "random") {
				setRandomFact(await fetchFact("random"));
			}
			if (selectedFact === "daily" && !dailyFact) {
				setDailyFact(await fetchFact("today"));
			}
		};
		setFact();
	}, [selectedFact, randomClickCount]);

	return (
		<>
			<FactBoxContainer
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}>
				<Heading1>
					{(selectedFact === "random" ? "Random" : "Daily") + " Fact"}
				</Heading1>
				<Paragraph>
					{selectedFact === "random" ? randomFact : dailyFact}
				</Paragraph>
			</FactBoxContainer>
		</>
	);
}

export default FactBox;
