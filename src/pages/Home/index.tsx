import React from "react";
import { useState } from "react";

import { Header } from "./../../components/Headers";
import { IconsRedesSocias } from "./../../components/iconsRedesSocias";

import "./home.css";

export const Home = () => {
  const [frontCover, setFrontCover] = useState("cf1");
  const [] = useState("");

  const handleCoverFlip = () => {
    setFrontCover((prevState) => {
      if (prevState === "cf1") {
        return "bc1";
      }
      return "cf1";
    });
  }

  return (
    <main className="home">
      <div className="book">
        <div className="leaf" id="lcf">
          <div className="front">
            <div
              id={frontCover}
              className="front-content"
              onClick={handleCoverFlip}
            ></div>
          </div>
          <div className="back">
          </div>
        </div>

        <div className="leaf" id="p1">
          <div className="front">
            <div id="f1" className="front-content">
              frente1
            </div>
          </div>
          <div className="back">
          </div>
        </div>

        <div className="leaf" id="p2">
          <div className="front">
            <div id="f2" className="front-content">
              frente2
            </div>
          </div>
          <div className="back">
            <div id="b2" className="back-content">
              traz2
            </div>
          </div>
        </div>

        <div className="leaf" id="p3">
          <div className="front">
            <div id="f3" className="front-content"></div>
          </div>
          <div className="back">
            <div id="b3" className="back-content"></div>
          </div>
        </div>

        <div className="leaf" id="lcb">
          <div className="front">
            <div id="fc2" className="front-content"></div>
          </div>
          <div className="back">
            <div id="bc2" className="back-content"></div>
          </div>
        </div>
      </div>
    </main>
  );
};
