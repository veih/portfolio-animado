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
          <span >
            <Header />
          </span>
          <span>
            <IconsRedesSocias />
          </span>
          Redes socias
        </div>
        <div className={id} onClick={handleFlip}>
        </div>
      </div>
    </main>
  );
};
