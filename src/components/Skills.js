import React, { useState, useEffect } from "react";
import "./skills.css";
import leetcode from "./assets/leetcode.svg";
import codechef from "./assets/codechef.svg";
import codeforces from "./assets/codeforces.svg";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import axios from "axios";
import ProgrammingCard from "./ProgrammingCard";

export default function Skills() {
  const [codeforcesData, setCodeforcesData] = useState(0);
  const [codechefData, setCodechefData] = useState(0);
  const [leetcodeData, setLeetcodeData] = useState(0);

  useEffect(() => {
    const cfapi = "https://codeforces.com/api/user.info?handles=07suryansh";
    axios
      .get(cfapi)
      .then((response) => {
        // console.log(response.data.result[0]);
        setCodeforcesData(response.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    const ccapi = "https://coderme.vercel.app/codechef/bisensuryansh";
    axios
      .get(ccapi)
      .then((response) => {
        // console.log(response.data);
        setCodechefData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const ltapi = "https://coderme.vercel.app/leetcode/07suryansh";
    axios
      .get(ltapi)
      .then((response) => {
        // console.log(response.data);
        setLeetcodeData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cfColour = (rank) => {
    if (rank === "newbie") return "gray";
    else if (rank === "pupil") return "#008001";
    else if (rank === "specialist") return "#04A79E";
    else if (rank === "expert") return "#0000FF";
    else if (rank === "candidate master") return "#FF88FF";
    else if (rank === "master") return "#FFCC88";
    else if (rank === "international master") return "#FFBB55";
    else if (rank === "grandmaster") return "#FF7777";
    else if (rank === "international grandmaster") return "#FF3233";
    else if (rank === "legendary grandmaster") return "#AA0101";
  };
  const ccColour = (rank) => {
    if (rank < 1400) return "#7F7F7F";
    else if (rank >= 1400 && rank < 1600) return "#1D7D22";
    else if (rank >= 1600 && rank < 1800) return "#4C7FE5";
    else if (rank >= 1800 && rank < 2000) return "#684273";
    else if (rank >= 2000 && rank < 2200) return "#FFD71A";
    else if (rank >= 2200 && rank < 2400) return "#FF7F00";
    else if (rank >= 2600) return "#D0011C";
  };
  const ccStar = (rank) => {
    if (rank < 1400) return 1;
    else if (rank >= 1400 && rank < 1600) return 2;
    else if (rank >= 1600 && rank < 1800) return 3;
    else if (rank >= 1800 && rank < 2000) return 4;
    else if (rank >= 2000 && rank < 2200) return 5;
    else if (rank >= 2200 && rank < 2400) return 6;
    else if (rank >= 2600) return 7;
  };
  function curPrintStar(rank) {
    let n = ccStar(rank);
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(
        <FaStar key={i} style={{ color: `${ccColour(codechefData.rating)}` }} />
      );
    }
    return stars;
  }
  function maxPrintStar(rank) {
    let n = ccStar(rank);
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(
        <FaStar key={i} style={{ color: `${ccColour(maxCodechefRank)}` }} />
      );
    }
    return stars;
  }
  // printStar(codefchefData.rating);
  let maxCodechefRank = 1688;
  if (codechefData.rating > maxCodechefRank) {
    maxCodechefRank = codechefData.rating;
  }
  let maxLeetcodeRank = 1683;
  if (leetcodeData.rating > maxLeetcodeRank) {
    maxLeetcodeRank = leetcodeData.rating;
  }

  return (
    <>
      <div>
        <div className="skills-container">
          {/* <div className="skills-heading"> */}
          {/* <span className="nav-icon"></span>
            <span className="skills">Skills</span> */}
          {/* </div> */}
          <span className="skills-span">Tech Stack</span>
          <div className="skills-box data">
            <div className="tech-info">
              <SiCplusplus
                className="react-icons"
                style={{ color: "#374151" }}
              />
              <span className="tech-name">C++</span>
            </div>

            <div className="tech-info">
              <FaHtml5 className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">HTML</span>
            </div>
            <div className="tech-info">
              <FaCss3Alt className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">CSS</span>
            </div>
            <div className="tech-info">
              <SiJavascript
                className="react-icons"
                style={{ color: "#374151" }}
              />
              <span className="tech-name">Javascript</span>
            </div>
            <div className="tech-info">
              <FaJava className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Java</span>
            </div>
            <div className="tech-info">
              <FaGolang className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Go lang</span>
            </div>
            <div className="tech-info">
              <FaPython className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Python</span>
            </div>
            <div className="tech-info">
              <FaReact className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Reactjs</span>
            </div>
            <div className="tech-info">
              <FaNodeJs className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Nodejs</span>
            </div>
            <div className="tech-info">
              <SiExpress className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Express</span>
            </div>
            <div className="tech-info">
              <SiMongodb className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Mongo DB</span>
            </div>
            <div className="tech-info">
              <BiLogoPostgresql
                className="react-icons"
                style={{ color: "#374151" }}
              />
              <span className="tech-name">PostgreSQL</span>
            </div>
            <div className="tech-info">
              <SiPostman className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Postman</span>
            </div>
            <div className="tech-info">
              <FaBootstrap
                className="react-icons"
                style={{ color: "#374151" }}
              />
              <span className="tech-name">Bootstrap</span>
            </div>
            <div className="tech-info">
              <SiTailwindcss
                className="react-icons"
                style={{ color: "#374151" }}
              />
              <span className="tech-name">Tailwind CSS</span>
            </div>
            <div className="tech-info">
              <GrMysql className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">My SQL</span>
            </div>
            <div className="tech-info">
              <SiVercel className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Vercel</span>
            </div>
            <div className="tech-info">
              <FaFigma className="react-icons" style={{ color: "#374151" }} />
              <span className="tech-name">Figma</span>
            </div>
            <div className="tech-info">
              <SiAdobeillustrator
                className="react-icons"
                style={{ color: "#374151" }}
              />
              <span className="tech-name">Illustrator</span>
            </div>
            <div className="tech-info">
              <SiAdobephotoshop
                className="react-icons"
                style={{ color: "#374151" }}
              />
              <span className="tech-name">Photoshop</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
