import styled from "@emotion/styled";
import { motion } from "framer-motion";

const ButtonComponent = styled(motion.button)`
  font-size: 13px;
  font-weight: 500;
  background-color: #d6d6d6;
  padding: 12px 24px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #b0b0b0;
    cursor: pointer;
  }
`;

function Button({ text, onClick, index }) {
  return (
    <ButtonComponent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      onClick={onClick}
    >
      {text}
    </ButtonComponent>
  );
}

export default Button;
