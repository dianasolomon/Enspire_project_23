import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbarr from './Components/Navbar';
import Events from './Page/Event';
import Footer from './Components/Footer';
import Home from './Page/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (
      <div className="App">
        <Router>
          <Navbarr />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/event" exact element={<Events/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
export default App;