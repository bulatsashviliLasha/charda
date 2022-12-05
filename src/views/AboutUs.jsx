import AboutSection from "../components/AboutSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import FaqSection from "../components/FaqSection.jsx";

import { motion } from "framer-motion";
import { pageAnimation } from "../assets/animation/animation.js";

const AboutUs = () => {
    return (
        <motion.div
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
        </motion.div>
    )
}

export default AboutUs
