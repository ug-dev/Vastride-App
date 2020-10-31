import React from "react";
import FBIcon from "../image/fb-icon.svg";
import SideBanner from "../components/SideBanner";

export default function UserLogin() {
  return (
    <div className="user-login">
      <SideBanner />
      <div className="user-login-login-form">
        <div className="main-login-form">
          <h4>Login</h4>
          <form>
            <p>Enter phone number</p>
            <div className="login-form-input">
              <select>
                <option value="+237">+237</option>
              </select>
              <input type="tel" placeholder="Phone number" />
            </div>
            <div className="login-form-check">
              <input type="checkbox" />
              <p>Keep me login</p>
            </div>
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
