import { useState } from 'react';

import { motion } from 'framer-motion';

function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <section>
        <motion.h4 layout>{title}</motion.h4>
        <svg style={{ rotate: toggle ? '180deg' : '0deg' }} width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.07992 8.09765L7.59992 1.57765C8.36992 0.807655 9.62992 0.807655 10.3999 1.57766L16.9199 8.09766" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </section>
      {toggle && children}
      <div className="faq-line" />
    </motion.div>
  );
}

export default Toggle;
