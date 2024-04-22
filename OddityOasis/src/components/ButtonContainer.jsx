import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Buttons = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 1rem 2rem 1rem 2rem;
`;

const ButtonContainer = ({ children }) => (
  <Buttons initial="initial" animate="animate">
    {children}
  </Buttons>
);

export default ButtonContainer;
