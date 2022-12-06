import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

import styled from "styled-components";
import { BasicLayout, Description, Hide, Image } from "../styles.js";

import { scrollReveal } from "../assets/animation/animation.js";
import { scrollControlsAndElement } from "./scroll.js";

const ServicesSection = () => {
  const [element, controls] = scrollControlsAndElement();

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        High <span>quality</span> services
      </h2>
      <Description>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </Description>
      <Image>
        <img src={home2} alt="home" />
      </Image>
    </Services>
  );
};

const Services = styled(BasicLayout)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  h2 {
    padding-bottom: 5rem;
    color: white;
    grid-column: 1 / -1;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
