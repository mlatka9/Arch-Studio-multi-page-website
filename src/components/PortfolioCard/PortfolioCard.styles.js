import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const Wrapper = styled(motion.div)`
  position: relative;
  h3,
  span {
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    display: block;
    left: 30px;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
    bottom: 50px;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    bottom: 40px;
  }
`;

export const ImageFilter = styled.div`
  position: absolute;
  inset: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4766281512605042) 0%, rgba(46, 50, 90, 0) 60%);
`;
