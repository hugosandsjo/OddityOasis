import styled from "@emotion/styled";
import { motion } from "framer-motion";

const ButtonComponent = styled(motion.button)`
	--btn-clr: #29211d;
	font-size: clamp(1em, 3vw, 1.25em);
	text-wrap: nowrap;
	font-weight: 600;
	padding: 12px 24px;
	border-radius: 5px;
	border: 2px solid var(--btn-clr);
	color: var(--btn-clr);
	align-items: center;
	background-color: transparent;
	display: flex;
	justify-content: center;
	text-align: center;
	&:hover {
		background-color: var(--btn-clr);
		border: 2px solid var(--btn-clr);
		color: white;
		cursor: pointer;
		transition: all 0.3s ease;
	}
`;

const Icon = styled.img`
	margin-left: 8px;
	height: 20px;
`;

export interface ButtonProps {
	text: string;
	onClick: () => void;
	className?: string;
	icon?: string;
}

function Button({ text, icon, ...attrs }: ButtonProps) {
	return (
		<ButtonComponent
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			{...attrs}>
			{text}
			{icon && <Icon src={icon} alt="Icon" />}
		</ButtonComponent>
	);
}

export default Button;
