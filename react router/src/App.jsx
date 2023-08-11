import { Routes, Route, Link } from "react-router-dom";
import './index.css';

import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

function App() {

  return (
    <>
      <div id="container">
        { <NavBar /> }
        { <MainContent /> }
      </div>
    </>
  )
}

export default App
