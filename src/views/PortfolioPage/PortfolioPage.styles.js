import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const Wrapper = styled(motion.section)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 100px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 700px) {
    padding: 30px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(95%);
  }
`;
