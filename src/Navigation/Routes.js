import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Components/Header";

function NavigationRoutes() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}

export default NavigationRoutes;
