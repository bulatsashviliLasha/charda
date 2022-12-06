import { Link } from "react-router-dom";

import styled from "styled-components";

import { MovieData } from "../data/movieData.js";

import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
} from "../assets/animation/animation.js";
import { scrollControlsAndElement } from "../components/scroll.js";

const Movie = ({ title, url, img }) => {
  return (
    <>
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div className="line" variants={lineAnimation}></motion.div>
      <Link to={url}>
        <Hide>
          <motion.img variants={photoAnimation} src={img} alt={title} />
        </Hide>
      </Link>
    </>
  );
};

const OutWork = () => {
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
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      {MovieData.map((movie, index) => (
        <StyledMovie
          key={movie + index * 5}
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
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 2rem;

  h2 {
    padding: 1rem 0;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: rgba(35, 217, 151, 0.7);
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
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
