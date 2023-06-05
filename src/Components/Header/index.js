import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  const [hide1, setHide1] = useState();
  const [hide2, setHide2] = useState();
  const [hide3, setHide3] = useState();

  return (
    <>
      <div className="apple-header">
        <div className={hide2 ? "nav-container active" : "nav-container"}>
          <nav className={hide3 ? "move-up" : ""}>
            <ul className="mobile-nav">
              <li>
                <div
                  className="menu-icon-container"
                  onClick={() => setHide2(!hide2)}
                >
                  <div className="menu-icon">
                    <span className="line-1" />
                    <span className="line-2" />
                  </div>
                </div>
              </li>
              <li>
                 <a href="#main1" className="link-logo">
                </a> 
              </li>
              <li className="uk-inline">
                <a
                  href
                  className="link-bag uk-button uk-button-default"
                  type="button"
                >
                </a>
              </li>
            </ul>
            <ul
              className={
                hide1
                  ? "desktop-nav hide"
                  : "desktop-nav" && hide3
                    ? "desktop-nav move-down"
                    : "desktop-nav"
              }
              id="search1"
            >
              <li>
                <a href="/" className="link-logo">
                </a>
              </li>
              <li className="nav-text">
                <a  onClick={() => setHide2(!hide2)} href="#pro1"><span className='heading-headline-nav'>Fahrzeugsuche</span></a>
              </li>
              <li className="nav-text">
                <a  onClick={() => setHide2(!hide2)} href="#pro2"><span className='heading-headline-nav'>Deals</span></a>
              </li>
              <li className="nav-text">
                <a  onClick={() => setHide2(!hide2)} href="#pro3"><span className='heading-headline-nav'>Auto verkaufen</span></a>
              </li>
              <li className="nav-text">
                <a  onClick={() => setHide2(!hide2)} href="#pro3"><span className='heading-headline-nav'>Online Bestellung</span></a>
              </li>
              <li className="nav-text">
                <a
                  href="# "
                  onClick={() => setHide1(true)}
                  className="link-search"
                >
                  {" "}
                </a>
              </li>
            </ul>
          </nav>
          {/* End of navigation items */}
          <div
            className={hide1 ? "search-container" : "search-container hide"}
            id="search2"
          >
            <div className="link-search" />
            <div className="search-bar">
              <form action>
                <input type="text" placeholder="Search..." />
              </form>
            </div>
            <div className="link-close" onClick={() => setHide1(false)} />
            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul> 
              </ul>
            </div>
          </div>
          <div className="mobile-search-container">
            <div className="link-search" />
            <div className={hide3 ? "search-bar active" : "search-bar"}>
              <form action onClick={() => setHide3(true)}>
                <input type="text" placeholder="Search..." />
              </form>
            </div>
            <span className="cancel-btn" onClick={() => setHide3(false)}>
              Quit
            </span>
            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul>
              </ul>
            </div>
          </div>
        </div>
        <div className={hide1 ? "overlay show" : "overlay"} />
      </div>
    </>
  );
}

export default Header;