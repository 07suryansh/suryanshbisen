import React from "react";
import "./footer.css";
import logohd from "./ssb.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src={logohd} alt="" className="ssb-logo" />

        <div className="footer-links-one">
          <a href="https://codeforces.com/profile/07suryansh" target="_blank" rel="noreferrer">
            Codeforces
          </a>
          <a href="https://leetcode.com/u/07suryansh/" target="_blank" rel="noreferrer">Leetcode</a>
          <a href="https://www.codechef.com/users/bisensuryansh" target="_blank" rel="noreferrer">Codechef</a>
          <a href="https://www.naukri.com/code360/profile/07suryansh" target="_blank" rel="noreferrer">Codestudio</a>
        </div>
        <div className="footer-links-one">
          <a href="https://www.linkedin.com/in/07suryansh/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/07suryansh" target="_blank" rel="noreferrer">Github</a>
          <a href="https://x.com/suryanshbisen" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.instagram.com/07suryansh/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>

      <p className="copyright">&copy; 2025 Suryansh Singh Bisen</p>
    </footer>
  );
}
