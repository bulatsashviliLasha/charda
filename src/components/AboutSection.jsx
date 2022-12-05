import home1 from '../img/home1.png';
import {BasicLayout, Description, Hide, Image} from "../styles.js";

import {motion} from "framer-motion";
import {titleAnimation, fade, photoAnimation} from "../assets/animation/animation.js";
import Wave from "./Wave.jsx";

const AboutSection = () => {

    return (
        <BasicLayout>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2
                            variants={titleAnimation}

                        >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnimation}

                        >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnimation}

                        >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p
                    variants={fade}
                >Contact us for any photography or videography ideas that you have.</motion.p>
                <motion.button
                    variants={fade}
                >CONTACT US</motion.button>
            </Description>
            <Image>
                <motion.img
                    variants={photoAnimation}
                    src={home1}
                    alt="Guy with a camera"
                />
            </Image>
            <Wave />
        </BasicLayout>
    )
};

export default AboutSection;
