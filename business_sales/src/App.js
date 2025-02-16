import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Home from './pages/Home';
import Total from './pages/Total';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar  />
      {/* <div className="App"> */}
          <Routes>
            <Route path="/Biscuit-Shop" element={<Home />} />
            <Route path="/bill" element={<Total />} />
          </Routes>
          <Footer/>
        {/* </div> */}
    </Router>
  );
}

export default App;
