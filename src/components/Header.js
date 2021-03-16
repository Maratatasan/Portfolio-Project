import React, { Component } from "react";
//react typed text make the text write on the screen
import Typed from "react-typed";

export default class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="main-info">
          <h1>Web & Music projects</h1>
          <Typed
            className="typed-text"
            typeSpeed={40}
            backSpeed={50}
            loop
            strings={[
              "Front End Web Development",
              "Web Design",
              "JavaScript, React, Bootstraps",
              "Music Production",
            ]}
          />
          <a href="#" className="btn-main-offer">
            contact me
          </a>
        </div>
      </div>
    );
  }
}
