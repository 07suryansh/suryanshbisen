import React from "react";
import "./home.css";
import mypic from "./aidp.jpg";
import "./animations.css";
import { useState, useEffect } from "react";
import leetcode from "./assets/leetcode.svg";
import codechef from "./assets/codechef.svg";
import codeforces from "./assets/codeforces.svg";
import { FaStar } from "react-icons/fa";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import axios from "axios";
import ProgrammingCard from "./ProgrammingCard";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.location.href = 'https://ssbresume.vercel.app';
  };


  // skills start

  const [codeforcesData, setCodeforcesData] = useState(0);
  const [codechefData, setCodechefData] = useState(0);
  const [leetcodeData, setLeetcodeData] = useState(0);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API;
    // console.log(apiKey);
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
    const ccapi = `${apiKey}/codechef`;
    axios
      .get(ccapi)
      .then((response) => {
        // console.log(response.data);
        setCodechefData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const ltapi = `${apiKey}/leetcode`;
    axios
      .get(ltapi)
      .then((response) => {
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

  // skills end

  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="user-card">
            <img
              src={mypic}
              alt="profile"
              className="profile-img"
              draggable="false"
            />
            <span className="myname">Suryansh Singh Bisen</span>
            <section className="socials">
              <a
                href="https://www.instagram.com/07suryansh/"
                className="icon-link"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/07suryansh/"
                className="icon-link"
              >
                <FaLinkedinIn className="social-icon" />
              </a>
              <a href="https://x.com/suryanshbisen" className="icon-link">
                <FaXTwitter className="social-icon" />
              </a>
            </section>

            <button
              className="btn"
              onClick={handleButtonClick}
            >
              Resume
            </button>
            {/* <span class="material-symbols-outlined">download</span> */}
            <p className="para send">
              I'm Full Stack Web developer and UI/UX designer. I've done my
              B.Tech in Electronics and Communication Engineering from National
              Institute of Technology Hamirpur.
            </p>
          </div>
        </div>
        <div className="about-heading">
          <span className="about">Programming</span>
        </div>
        <div className="programming-box">
          <ProgrammingCard
            platformName="Codeforces"
            platformIcon={codeforces}
            platformUsername={codeforcesData.handle}
            currentRating={codeforcesData.rating}
            currentRank={codeforcesData.rank}
            highestRating={codeforcesData.maxRating}
            highestRank={codeforcesData.maxRank}
            nameCurrentColor={cfColour(codeforcesData.rank)}
            nameHighestColor={cfColour(codeforcesData.maxRank)}
            platformLink={"https://codeforces.com/profile/07suryansh"}
          />

          <ProgrammingCard
            platformName="Codechef"
            platformIcon={codechef}
            platformUsername={"bisensuryansh"}
            currentRating={codechefData.currentRating}
            currentRank={
              <div style={{ display: "flex" }}>
                {curPrintStar(codechefData.currentRating).map((e, index) => (
                  <div key={index}>{e}</div>
                ))}
              </div>
            }
            highestRating={codechefData.maxRating}
            highestRank={
              <div style={{ display: "flex" }}>
                {maxPrintStar(codechefData.maxRating).map((e, index) => (
                  <div key={index}>{e}</div>
                ))}
              </div>
            }
            nameCurrentColor={ccColour(codechefData.currentRating)}
            nameHighestColor={ccColour(codechefData.maxRating)}
            platformLink={"https://www.codechef.com/users/bisensuryansh"}
          />

          <ProgrammingCard
            platformName="Leetcode"
            platformIcon={leetcode}
            platformUsername={"07suryansh"}
            currentRating={leetcodeData.currentRating}
            highestRating={leetcodeData.maxRating}
            nameCurrentColor={"black"}
            nameHighestColor={"black"}
            platformLink={"https://leetcode.com/07suryansh/"}
          />
        </div>
        <div className="about-container">
          <div className="about-heading">
            <span className="about">Education</span>
          </div>
          <div className="about-box">
            <span className="institute-name">
              National Institute of Technology Hamirpur{" "}
            </span>
            <span className="study-stream">
              B.Tech in Electronics and Communication Engineering
            </span>
            <span className="study-period">2020-2024</span>
            <span className="grade">8.28/10</span>
          </div>
          <div className="about-box">
            <span className="institute-name">
              Kendriya Vidyalaya IIT Kanpur{" "}
            </span>
            <span className="study-stream">Class XII</span>
            <span className="study-period">2019</span>
            <span className="grade">95%</span>
          </div>
          <div className="about-box">
            <span className="institute-name">
              Kendriya Vidyalaya IIT Kanpur{" "}
            </span>
            <span className="study-stream">Class X</span>
            <span className="study-period">2017</span>
            <span className="grade">10 CGPA</span>
          </div>
        </div>
        
      </div>
    </>
  );
}
