import React from "react";
// Image import //
import imgHero from "../../../Assests/Hero/hero.png";
// Styles //
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="sectionContainer">
          <div className="heroText">
            <span className="titleSub">Buy used cars with a guarantee</span>
            <h1 className="title">Porsche 911 Dakar</h1>
            <div className="btnContainer">
              <button className="btnOne">Learn more</button>
              <button className="btn">Contact us</button>
            </div>
          </div>
          <div className="heroImage">
            <img src={imgHero} alt="heroImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
