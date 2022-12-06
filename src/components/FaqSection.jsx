import Toggle from "./Toggle.jsx";
import {scrollControlsAndElement} from "./scroll.js";

import styled from "styled-components";
import { BasicLayout } from "../styles.js";
import faqData from "../data/faqData.js";
import { LayoutGroup } from "framer-motion";
import { scrollReveal } from "../assets/animation/animation.js";

const Answer = ({ textOne, textTwo }) => {
  return (
    <div className="answer">
      <p>{textOne}</p>
      <p>{textTwo}</p>
    </div>
  );
};
const FaqSection = () => {
  const [element, controls] = scrollControlsAndElement();
  return (
    <StyledFaq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      {faqData.map((item, index) => {
        return (
          <LayoutGroup key={item.title + index}>
            <Toggle title={item.title}>
              <Answer textOne={item.firstText} textTwo={item.secondText} />
            </Toggle>
          </LayoutGroup>
        );
      })}
    </StyledFaq>
  );
};

const StyledFaq = styled(BasicLayout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
