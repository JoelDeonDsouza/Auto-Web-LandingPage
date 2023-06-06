import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../Components/Header";
// Page
import Home from "../Pages/Home";

function NavigationRoutes() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default NavigationRoutes;
