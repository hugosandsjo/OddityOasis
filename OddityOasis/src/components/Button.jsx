import styled from "@emotion/styled";
import { motion } from "framer-motion";

const ButtonComponent = styled(motion.button)`
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 5px;
  border: 2px solid black;
  border-radius: 2rem;

  &:hover {
    background-color: #b0b0b0;
    cursor: pointer;
  }
`;

function Button({ text, onClick, className }) {
  return (
    <ButtonComponent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      onClick={onClick}
      className={className}
    >
      {text}
    </ButtonComponent>
  );
}

export default Button;
