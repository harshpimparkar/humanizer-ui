import React from "react";
export default function Header() {
  return (
    <div className="header-container">
      <div className="head-title">
        <img src="public\icons8-gear-94.png" alt="logo" height="30" width="30"/>
        <h2>Humanizer</h2>
      </div>
      <div className="head-links">
        <div className="head-element">Home</div>
        <div className="head-element">About</div>
        <div className="head-element">Contact</div>
      </div>
    </div>
  );
}
