import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import ErrorPage from "./screens/errorpage/ErrorPage";
import Home from "./screens/home/Home";
import Pokedex from "./screens/pokedex/Pokedex";
import Legendaries from "./screens/legendaries/Legendaries";

import "./App.css";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/Legendaries" element={<Legendaries/>} />
          <Route path="/ErrorPage" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
