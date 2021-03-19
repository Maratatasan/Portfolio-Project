import React from "react";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      {/*bootstrap  py-5 : padding at top */}
      <h1 className="py-5">Services</h1>
      <div className="container">
        {/* bootstrap row */}
        <div className="row">
          {/* bootstraps something to do with columns medium and small  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design </h3>
              <p>
                I approach each project individually and always focus on result{" "}
              </p>
            </div>
          </div>
          {/* */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development </h3>
              <p>
                Your website will be built using new and proven technologies
              </p>
            </div>
          </div>
          {/* */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                />
              </div>
              <h3>FB Ads </h3>
              <p>
                your potential clients will see your services and product on
                facebook
              </p>
            </div>
          </div>
          {/* */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Google Ads </h3>
              <p>
                your services or products will appear at the top of google
                search
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
