import React from "react";
import { useState } from "react";

import "./home.css";

export const Home = () => {
  const [id, setId] = useState("frontCoverOut");

  const handleFlip = () => {
    
    if (id === "frontCoverOutFlip") {
      setId("frontCoverOut");
    } else {
      setId("frontCoverOutFlip");
    }
  };

  const handleFlipOut = () => {};

  return (
    <main className="home">
      <div className="book">
        <div className="frontCoverFace"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf">5</div>
        <div className={id} onClick={handleFlip}></div>
      </div>

      <h5>Em desenvolvimento em breve estara finalizado.</h5>
    </main>
  );
};
