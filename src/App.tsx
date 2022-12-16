import React from "react";

import "./App.css";

import { Header } from "./components/Headers";
import { Routers } from "./Routers";
import { Title } from "./components/Titles";

function App() {
  return (
    <>
      <Header />
      <Title title="Portfólio" />

      <div className="body bg-pan-bottom">
        <Routers />
      </div>
    </>
  );
}

export default App;
