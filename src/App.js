import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import MenuMain from './components/Header/MenuMain';
import Slide from './components/Header/Slide';
import Footer_ from './components/Footer/Footer_';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Profolio from './components/Profolio';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='wrapper'>
          <div className='main'>
            <MenuMain />
            <Slide />
          </div>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/profolio' element={<Profolio />} />
            <Route path="/about" element={<About/>} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer_ />
        </div>
      </div>
    </Router>

  );
}

export default App;
