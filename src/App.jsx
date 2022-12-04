import {Routes, Route} from "react-router-dom";
import GlobalStyles from "./assets/global styles/GlobalStyles.js";

import OutWork from "./views/OurWork.jsx";
import ContactUs from "./views/ContactUs.jsx";

import AboutUs from "./views/AboutUs.jsx";
import Nav from "./components/Nav.jsx";


function App() {
  return (
    <div className="App">
        <GlobalStyles/>
        <Nav/>
        <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/work" element={<OutWork />} />
            <Route path="/contact" element={<ContactUs />} />
        </Routes>
    </div>
  )
}

export default App
