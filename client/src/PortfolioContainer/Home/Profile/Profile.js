import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/mann-patel-a0054b232/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/mpatel1802">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCYF3Wt5AZH9qk21IMjreJMw">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hey there!, I'm <span className="highlighted-text">Mann Patel</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Software Developer",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Building quality websites and applications using front and
              back-end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Contact Me </button>
            <a href="Mann_Patel_Resume.pdf" download="Mann Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
