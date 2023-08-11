import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Blue from './Blue';
import Red from './Red';

export default function MainContent() {

  return (
    <div id="main-section">
    <Routes>
      <Route path="nav" element={<NavBar/>}/>
      <Route path="/blue" element= {<Blue />} />
      <Route path="/red" element={<Red />}/>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  )
}