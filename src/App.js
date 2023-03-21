import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './components/About';
import Service from './components/Service';
import ClassInfo from './components/ClassInfo';
import Contact from './components/Contact';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return(
    <>
    <Router>
          <Navbar />
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/service' element={<Service/>} />
              <Route exact path='/classinfo' element={<ClassInfo/>} />
              <Route exact path='/contact' element={<Contact/>} />
            </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
