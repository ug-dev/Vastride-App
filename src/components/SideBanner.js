import React from "react";
import Logo from "../image/logo-1.svg";
import SecondLogo from "../image/second-logo.svg";

export default function SideBanner() {
  return (
    <div className="user-login-side-banner">
      <img src={Logo} alt="" />
      <img src={SecondLogo} alt="" />
      <p>Always there when you need.</p>
    </div>
  );
}
