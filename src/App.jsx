import {Routes, Route, useLocation} from "react-router-dom";
import GlobalStyles from "./assets/global styles/GlobalStyles.js";

import OutWork from "./views/OurWork.jsx";
import ContactUs from "./views/ContactUs.jsx";
import MovieDetail from "./views/MovieDetail.jsx";
import AboutUs from "./views/AboutUs.jsx";

import Nav from "./components/Nav.jsx";

import { AnimatePresence } from "framer-motion";


function App() {
    const location = useLocation();
  return (
    <div className="App">
        <GlobalStyles/>
        <Nav/>
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<AboutUs />} />
                <Route path="/work" element={<OutWork />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/work/:id" element={<MovieDetail />} />
            </Routes>
        </AnimatePresence>
    </div>
  )
}

export default App
