import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ReactNode } from "react";

const Buttons = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 300px;
	@media (min-width: 768px) {
		flex-direction: row;
		width: 100%;
		padding-left: 2rem;
		max-width: 500px;
	}
`;

interface ButtonContainerProps {
	children: ReactNode;
}

const ButtonContainer = ({ children }: ButtonContainerProps) => (
	<Buttons initial="initial" animate="animate">
		{children}
	</Buttons>
);

export default ButtonContainer;
