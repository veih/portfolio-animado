import React from "react";
import { useState } from "react";

import { Header } from './../../components/Headers'
import { IconsRedesSocias } from './../../components/iconsRedesSocias'
import { Title } from './../../components/Titles'

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

  return (
    <main className="home">
      <div className="book">
        <div className="frontCoverFace"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf">
          <h6>Marcelo Evangelista de Oliveira</h6>
          <h6>Desenvolvedor Front - End</h6>
          <span id="header">
            <Header />
          </span>
          <span>
            <IconsRedesSocias />
          </span>
          Redes socias
        </div>
        <div className={id} onClick={handleFlip}>
          <p > Nos tornamaos o que desejamos ser </p>
          <h1 id="dev">Dev</h1>
        </div>
      </div>
    </main>
  );
};
