import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "./Button";

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
	buttons: ButtonProps[];
}

const ButtonContainer = ({ buttons }: ButtonContainerProps) => (
	<Buttons initial="initial" animate="animate">
		{...buttons.map((button, index) => <Button key={index} {...button} />)}
	</Buttons>
);

export default ButtonContainer;
