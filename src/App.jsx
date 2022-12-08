import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './assets/global styles/GlobalStyles';

import OutWork from './views/OurWork';
import ContactUs from './views/ContactUs';
import MovieDetail from './views/MovieDetail';
import AboutUs from './views/AboutUs';

import Nav from './components/Nav';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OutWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/work/:id" element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
