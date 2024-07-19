import React from "react";

export default function ProgrammingCard(props) {
  return (
    <>
      <div className="platform">
        {/* <div className="platform-img"> */}
          <img src={props.platformIcon} alt={props.platformName} />
          {/* <div className="platform-name">{props.platformName}</div> */}
        {/* </div> */}

        <div className="detail">
          <div
            className="username"
            onClick={() => {
              window.open(`${props.platformLink}`, "_blank");
            }}
          >
            Username :{" "}
            <span
              style={{ color: `${props.nameCurrentColor}`, fontWeight: "700" }}
            >
              {props.platformUsername}
            </span>
          </div>
          <div className="current-rating">
            <span>Current Rating :</span> &nbsp;{" "}
            <span
              style={{ color: `${props.nameCurrentColor}`, fontWeight: "700" }}
            >
              {props.currentRating} &nbsp; {props.currentRank}
            </span>
          </div>
          <div className="highest-rating">
            <span>Highest Rating :</span> &nbsp;{" "}
            <span
              style={{ color: `${props.nameHighestColor}`, fontWeight: "700" }}
            >
              {props.highestRating} &nbsp; {props.highestRank}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
