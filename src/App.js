import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Home from './components/core/Home.jsx'
import DataCellGen from './components/core/DateCellGen.jsx'
import TermsGen from './components/core/TermsGen.jsx'
import About from './components/core/About.jsx'
import NotFound from './components/core/NotFound.jsx'


function App() {
  return (
    <Router>
      <Navbar />
    <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/datacellgen' element={<DataCellGen />} />
      <Route path='/termsgen' element={<TermsGen />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>

    </main>
    </Router>
  );
}

export default App;
