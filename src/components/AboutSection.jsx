import { motion } from 'framer-motion';
import home1 from '../assets/pictures/img/home1.jpg';
import {
  BasicLayout, Description, Hide, Image,
} from '../styles';

import { titleAnimation, fade, photoAnimation } from '../assets/animation/animation';
import Wave from './Wave';

function AboutSection() {
  return (
    <BasicLayout>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2
              variants={titleAnimation}
            >
              Dedicated Software
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              variants={titleAnimation}
            >
              <span>Development</span>
              {' '}
              Team
            </motion.h2>
          </Hide>

        </motion.div>
        <motion.p
          variants={fade}
        >
          Hire dedicated development team that fits your needs at scale
        </motion.p>
        <motion.a
          href="mailto:bulatsashvili.lasha@gmail.com"
          className="button"
          variants={fade}
        >
          CONTACT US
        </motion.a>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Software team"
        />
      </Image>
      <Wave />
    </BasicLayout>
  );
}

export default AboutSection;
