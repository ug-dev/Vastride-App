import React from "react";
import "../VerifyDriver.css";
import SideBanner from "../components/SideBanner";
import Image from "../image/driving-license.svg";

export default function DriverLogin() {
  return (
    <div className="verify-driver">
      <SideBanner />
      <div className="verify-driver-form">
        <div className="main-form">
          <h5>Verify Driver</h5>
          <form>
          <div className="image-preview">
              <img src={Image} alt="" />
            </div>
            <div className="image-input">
              <p>Other Document</p>
              <input type="file" />
            </div>

            <button>Next</button>
          </form>
        </div>
      </div>
    </div>
  );
}
