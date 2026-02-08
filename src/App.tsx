import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Shell from "./components/Layout/Shell";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import ContactShell from "./components/Contact/ContactShell";

function App() {
  return (
    <>
      <Router>
        <Shell>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactShell />} />
          </Routes>
          <Footer />
        </Shell>
      </Router>
    </>
  );
}

export default App;
