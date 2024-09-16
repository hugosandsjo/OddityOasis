import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Button from "./Button";
import CloseIcon from "/assets/close.svg";
import { fetchActivity } from "../services/api";

const BoredWrapper = styled(motion.div)`
	position: fixed;
	width: 100%;
	bottom: 0;
	display: grid;
	grid-template-rows: 1fr;
	gap: 2rem;
	border-radius: 25px 25px 0 0;
	padding: 2rem;
	background-color: #b2d2cd;
	transition: opacity 0.6s ease, filter 0.3s ease;

	.dark-mode & {
		background-color: #7292ad;
	}
`;

const BoredContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	overflow: hidden;
	.dark-mode & * {
		color: #3f3f3f;
	}
	transition: 300ms ease;
`;

const Header1 = styled.h1`
	text-align: center;
	font-size: 28px;
	font-weight: 500;
	margin: 0;
`;

const ParagraphMedium = styled.p`
	font-size: 20px;
	font-weight: 600;
	text-align: center;
	margin: 1rem;
	background-color: #f0f0f0;
	padding: 0.5rem 1rem;
	border-radius: 50px;
	.dark-mode & {
		color: #333;
	}
`;

const ParagraphSmall = styled.p`
	font-size: 12px;
	margin: 0;
	.dark-mode & {
		color: #555;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	.dark-mode & *:hover {
		color: #ccc;
	}
`;

const CloseButton = styled.img`
	position: absolute;
	top: 1rem;
	right: 1rem;
	width: 30px;
	cursor: pointer;
	transform: ${(props: { isRotated: boolean }) =>
		props.isRotated ? "rotate(180deg)" : "rotate(0deg)"};
	transition: transform 0.6s ease;
`;

function BoredBox() {
	const [activity, setActivity] = useState<string | null>(null);
	const [isClosed, setIsClosed] = useState(false);
	const closeButtonRef = React.useRef<HTMLImageElement>(null);

	useEffect(() => {
		fetchActivity("recreational").then(setActivity);
	}, []);

	return (
		<BoredWrapper
			initial={{ opacity: 0, y: 50 }}
			animate={{
				opacity: 1,
				y: 0,
				gridTemplateRows: isClosed ? "0fr" : "1fr",
			}}
			transition={{ duration: 0.6, delay: 0.2 }}>
			<BoredContent className="bored-content">
				<CloseButton
					ref={closeButtonRef}
					onClick={() => setIsClosed((prev) => !prev)}
					src={CloseIcon}
					alt="close"
					isRotated={isClosed}
				/>
				<Header1>Hmm.. You seem bored</Header1>
				<p>How about..</p>
				<ParagraphMedium>&#x2728; {activity} &#x2728;</ParagraphMedium>
				<ParagraphSmall>Generate new activity</ParagraphSmall>
				<ButtonWrapper>
					<Button
						text="Recreational"
						onClick={() =>
							fetchActivity("recreational").then(setActivity)
						}
					/>
					<Button
						text="Education"
						onClick={() =>
							fetchActivity("education").then(setActivity)
						}
					/>
				</ButtonWrapper>
			</BoredContent>
		</BoredWrapper>
	);
}

export default BoredBox;
