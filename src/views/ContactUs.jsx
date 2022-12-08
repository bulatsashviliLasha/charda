import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pageAnimation, titleAnimation } from '../assets/animation/animation';
import linkedIn from '../assets/pictures/svg/linkedin.svg';
import phoneIcon from '../assets/pictures/svg/phone.svg';
import emailIcon from '../assets/pictures/svg/email.svg';

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
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
`;

function ContactUs() {
  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <StyledTitle>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </StyledTitle>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        <Hide>
          <Social variants={titleAnimation}>
            <a href="mailto:bulatsashvili.lasha@gmail.com">
              <img style={{ width: '50px' }} src={emailIcon} alt="email" />
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <a href="https://www.linkedin.com/in/lasha-bulatsashvili/" target="_blank" rel="noreferrer">
              <img style={{ width: '50px' }} src={linkedIn} alt="linkedIn" />
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <a href="tel:+995511146232">
              <img style={{ width: '50px' }} src={phoneIcon} alt="phoneIcon" />
            </a>
          </Social>
        </Hide>

      </div>
    </StyledContact>
  );
}
export default ContactUs;
