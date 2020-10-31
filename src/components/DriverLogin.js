import React from "react";
import "../DriverLogin.css";
import FBIcon from "../image/fb-icon.svg";
import SideBanner from "../components/SideBanner";

export default function DriverLogin() {
  return (
    <div className="driver-login">
      <SideBanner />
      <div className="driver-login-form">
        <div className="main-login-form">
          <h5>Driver Sign Up</h5>
          <form>
            <div className="login-input">
              <input type="text" placeholder="eg. John" />
              <input type="text" placeholder="eg. Doe" />
            </div>
            <input type="email" placeholder="Email address" />
            <div className="login-select">
              <select>
                <option value="237">+237</option>
              </select>
              <input type="tel" placeholder="Phone number" />
            </div>
            <input type="password" placeholder="Create password" />
            <input type="text" placeholder="City" />
            <button>Next</button>
            <p id="or-text">or</p>
          </form>
          <div className="login-form-fb-login">
            <img src={FBIcon} alt="" />
            <p>Login with facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}
