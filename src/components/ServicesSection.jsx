import clock from "../assets/pictures/img/clock.svg";
import diaphragm from "../assets/pictures/img/diaphragm.svg";
import money from "../assets/pictures/img/money.svg";
import teamwork from "../assets/pictures/img/teamwork.svg";
import home2 from "../assets/pictures/img/home2.jpg";

import styled from "styled-components";
import { BasicLayout, Description, Image } from "../styles.js";

import { scrollReveal } from "../assets/animation/animation.js";
import { scrollControlsAndElement } from "../assets/utils/scroll.js";

const ServicesSection = () => {
  const [element, controls] = scrollControlsAndElement();

  return (
    <StyledServices
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
            <p>We’ll help you complete the project on time.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Together, We create.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Control</h3>
            </div>
            <p>Manage resources and keep control over the staff.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Being able to cut down on internal skill development.</p>
          </StyledCard>
        </StyledCards>
      </Description>
      <Image>
        <img src={home2} alt="home" />
      </Image>
    </StyledServices>
  );
};

const StyledServices = styled(BasicLayout)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  h2 {
    padding-bottom: 5rem;
    color: white;
    grid-column: 1 / -1;
  }
  p {
    padding: 2rem 0;
    text-align: left;
    width: 90%;
  }
  @media (max-width: 1100px){
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
