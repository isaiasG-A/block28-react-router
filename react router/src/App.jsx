import { Routes, Route, Link } from "react-router-dom";
import './index.css';

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Blue from './components/Blue';
import Red from './components/Red';

function App() {

  return (
    <>
      <div id="container">
        {<NavBar />}
        <div id="main-section">
          <Routes>
            <Route path="nav" element={<NavBar/>}/>
            <Route path="/blue" element= {<Blue />} />
            <Route path="/red" element={<Red />}/>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
