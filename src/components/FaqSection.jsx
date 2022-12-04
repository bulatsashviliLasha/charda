import styled from "styled-components";
import {BasicLayout} from "../styles.js";

const FaqSection = () => {
  return(
      <StyledFaq>
          <h2>Any Question <span>FAQ</span></h2>
          <div className="question">
              <h4>How Do I Start?</h4>
              <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="faq-line"></div>
          </div>
          <div className="question">
              <h4>Daily Schedule</h4>
              <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="faq-line"></div>
          </div>
          <div className="question">
              <h4>Different Payment Methods</h4>
              <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="faq-line"></div>
          </div>
          <div className="question">
              <h4>What products do you offer.</h4>
              <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="faq-line"></div>
          </div>
      </StyledFaq>
  )
};

const StyledFaq = styled(BasicLayout)`
  display: block;
  span{
    display: block;
  }
  h2{
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line{
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question{
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer{
    padding: 2rem 0rem;
    p{
      padding: 1rem 0;
    }
  }
`

export default  FaqSection;
