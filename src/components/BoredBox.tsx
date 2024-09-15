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
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	border-radius: 25px 25px 0 0;
	padding: 2rem;
	background-color: #b2d2cd;
	transition: all 0.6s ease;
`;

const BoredContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
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
`;

const ParagraphSmall = styled.p`
	font-size: 12px;
	margin: 0;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
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
	const [isRotated, setIsRotated] = useState(false);

	useEffect(() => {
		async function loadInitialActivity() {
			const initialActivity = await fetchActivity("recreational");
			setActivity(initialActivity);
		}

		loadInitialActivity();
	}, []);

	const handleCloseClick = () => {
		setIsClosed((prevIsClosed) => !prevIsClosed);
		setIsRotated((prevIsRotated) => !prevIsRotated);

		const contentElements =
			document.querySelectorAll<HTMLElement>(".content-element");
		contentElements.forEach((element) => {
			if (element !== closeButtonRef.current) {
				element.style.display = isClosed ? "flex" : "none";
				closeButtonRef.current!.style.transform = `${isRotated}`;
			}
		});
	};

	const closeButtonRef = React.useRef<HTMLImageElement>(null);

	return (
		<BoredWrapper
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0, height: isClosed ? "auto" : "auto" }}
			transition={{ duration: 0.6, delay: 0.2 }}>
			<BoredContent>
				<CloseButton
					ref={closeButtonRef}
					onClick={handleCloseClick}
					src={CloseIcon}
					alt="close"
					isRotated={isRotated}
				/>
				<Header1 className="content-element">
					Hmm.. You seem bored
				</Header1>
				<p className="content-element">How about..</p>
				<ParagraphMedium className="content-element">
					&#x2728; {activity} &#x2728;
				</ParagraphMedium>
				<ParagraphSmall className="content-element">
					Generate new activity
				</ParagraphSmall>
				<ButtonWrapper className="content-element">
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
