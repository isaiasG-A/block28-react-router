import { Routes, Route, Link } from "react-router-dom";
import './index.css';

import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div id="container">
        { <NavBar /> }
        { <MainContent /> }
        { <Footer /> }
      </div>
    </>
  )
}

export default App
