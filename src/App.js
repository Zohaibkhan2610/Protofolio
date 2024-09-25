import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/About' Component={About}/>
      <Route path='/Experience' Component={Experience}/>
      <Route path='/Projects' Component={Projects}/>
      <Route path='/Contact' Component={Contact}/>
    </Routes>
    <Footer/>
    </Router>
      
    </>
  );
}

export default App;
