import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "./site.html";
function Board() {
  return (
    <div>
      <div>
        <div className="Board-row">
          <button className="square"> X </button>
        </div>
      </div>
    </div>
  );
}
function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <board />
      </div>
    </div>
  );
}
