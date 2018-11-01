import React from "react";
import "./Score.css";

const Score = props => (
  <div className="score-bar">
    <ul>
      <li>{props.guessStatus}</li>
      <li>Current Score: {props.score}</li>
      <li>Top Score: {props.scoreTop}</li>
    </ul>
  </div>
);

export default Score;