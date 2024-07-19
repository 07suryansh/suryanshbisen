import React from "react";
import './projects.css'

export default function ProjectCard(props) {
  return (
    <div className="project-box">
      <div className="left">
        <img src={props.imglink} alt="" 
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
      </div>
      <div className="right">
        <div className="heading">{props.heading}</div>
        <div className="website-links">
        <span
          className="web-link"
          onClick={() => {
            window.open(props.url, "_blank");
          }}
        >
          Website
        </span>
        <span
          className="web-link"
          onClick={() => {
            window.open(props.github, "_blank");
          }}
        >
          Github
        </span>
        </div>
        
        <div className="tech">{props.tech}</div>
        <div className="info">{props.info}</div>
      </div>
    </div>
  );
}
