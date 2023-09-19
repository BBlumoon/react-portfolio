import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../my-react-portfolio/src/pages/Home'
import Projects from '../my-react-portfolio/src/pages/Projects';
import Resume from '../my-react-portfolio/src/pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
