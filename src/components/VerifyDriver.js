import React from "react";
import "../VerifyDriver.css";
import SideBanner from "../components/SideBanner";
import { Link } from "react-router-dom";
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
              <p>Driver's License</p>
              <input type="file" />
            </div>

            <Link to="/verify-driver2">
              <button>Next</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
