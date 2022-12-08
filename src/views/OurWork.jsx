import Tilt from 'react-vanilla-tilt';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { motion } from 'framer-motion';
import { scrollTop, scrollControlsAndElement } from '../assets/utils/scroll';
import MovieData from '../data/movieData';
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
} from '../assets/animation/animation';

function Movie({ title, url, img }) {
  return (
    <>
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div className="line" variants={lineAnimation} />
      <Link to={url} onClick={scrollTop}>
        <Hide>
          <Tilt style={{ width: '100%' }}>
            <motion.img variants={photoAnimation} src={img} alt={title} />
          </Tilt>
        </Hide>
      </Link>
    </>
  );
}

function OutWork() {
  const [elementOne, controlsOne] = scrollControlsAndElement();
  const [elementTwo, controlsTwo] = scrollControlsAndElement();
  const [elementThree, controlsThree] = scrollControlsAndElement();
  const elements = [elementOne, elementTwo, elementThree];
  const controls = [controlsOne, controlsTwo, controlsThree];
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      {MovieData.map((movie, index) => (
        <StyledMovie
          key={movie.key}
          ref={elements[index]}
          variants={fade}
          animate={controls[index]}
          initial="hidden"
        >
          <Movie img={movie.mainImg} url={movie.url} title={movie.title} />
        </StyledMovie>
      ))}
    </StyledWork>
  );
}

const StyledWork = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 2rem;

  h2 {
    padding: 1rem 0;
  }
  @media (max-width: 768px){
    padding: 2rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 4rem;

  .line {
    height: 0.5rem;
    background-color: rgba(35, 217, 151, 0.7);
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    max-height: 650px;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OutWork;
