import "../App.css";
import React, { Component } from "react";
import logo from "../Logo_light.mp4";

export class Logo extends Component {
  render() {
    return (
      <div>
        <player className="logo" src={logo} autoPlay="autoplay" loop="loop" />
      </div>
    );
  }
}

export default Logo;
