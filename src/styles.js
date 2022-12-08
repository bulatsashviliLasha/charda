import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BasicLayout = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 2rem;
  color: white;
  @media (max-width: 1100px){
    display: block;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2{
    font-weight: lighter;
  }
  @media (max-width: 1100px){
    padding-right: 0;
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  border-radius: 20px;
  margin-top: 50px;
  img{
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
