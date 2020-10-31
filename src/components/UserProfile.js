import React from "react";
import "../UserProfile.css";
import User from "../image/user-profile.svg";
import SideBanner from "../components/SideBanner";

export default function UserProfile() {
  return (
    <div className="user-profile">
      <SideBanner />
      <div className="user-profile-form">
        <div className="main-login-form">
          <h5>Complete profile</h5>
          <img src={User} alt="" />
          <form>
            <div className="form-first">
              <p>Firstname</p>
              <input type="text" placeholder="eg. John" />
            </div>
            <div className="form-last">
              <p>Lastname</p>
              <input type="text" placeholder="eg. Doe" />
            </div>
          </form>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
