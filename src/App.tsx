import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Shell from "./components/Layout/Shell";
import Navbar from "./components/Layout/Navbar";
import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <>
      <Router>
        <Shell>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Shell>
      </Router>
    </>
  );
}

export default App;
