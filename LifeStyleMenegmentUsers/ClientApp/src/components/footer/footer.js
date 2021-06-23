import React, { useState } from "react";
import './footer.css';
const Footer = (props) => {
  return (
    <div >
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase"></h5>

              <p>

              </p>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase"></h5>

              <p>

              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{backgroundColor:" rgba(0, 0, 0, 0.2)",marginTop:"10px"}}
        >
          © 2021 E.M.


        </div>
      </footer>
    </div>
  );
};
export default Footer;
