import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../assets/animation/animation.js";
import styled from "styled-components";


const StyledContact = styled(motion.div)`
  padding: 5rem 2rem;
  color: #353535;
  text-align: center;
  min-height: 90vh;
  font-size: 5rem;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
  h2{
    font-size: 2rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2{
    margin: 2rem;
    font-size: 1.5rem;
  }
`;

const ContactUs = () => {
    return(
        <StyledContact
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            style={{background: "#fff"}}
        >
            <StyledTitle>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </Hide>
            </StyledTitle>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                        <h2>Send Us A Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                        <h2>Send an Email.</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                        <h2>Social Media</h2>
                    </Social>
                </Hide>

            </div>
        </StyledContact>
    )
}
export default ContactUs;

