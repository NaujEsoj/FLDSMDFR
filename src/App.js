import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import DataCellGen from "./components/core/DataCellGen";
import TermGen from "./components/core/TermsGen";
import About from "./components/About";



function App() {
  return (
    <Router>
      <Navbar />
    <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/datacellgen' element={<DataCellGen />} />
      <Route path='/termsgen' element={<TermGen />} />
      <Route path='/about' element={<About />} />
    </Routes>

    </main>
    </Router>
  );
}

export default App;
