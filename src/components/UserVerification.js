import React from "react";
import "../UserVer.css";
import SideBanner from "../components/SideBanner";

export default function UserVerification() {
  return (
    <div className="user-ver">
      <SideBanner />
      <div className="user-ver-form">
        <div className="main-login-form">
          <h5>Verification</h5>
          <form>
            <p>Enter your code</p>
            <input type="text" placeholder="6-digit code" />
            <p>Get a new code</p>
            <button>Login</button>
            <p>
              We sent an SMS with a 6-digit code to <br />
              +919016700668
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
