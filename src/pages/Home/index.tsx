import React from "react";

import { Span } from "../../components/spans";

import "./home.css";

export const Home = () => {
  return (
    <main className="home">
      <div className="bolhas home-aria">
        <img src={"./../../../public/assets/Sanna/sanna.jpg"} alt="Imagem" />
        <Span />
      </div>
      <div className="home-primaria">
        <div>
          <h1>Sobre me:</h1>
          <p>
            Eu sou Marcelo Evangelista de Oliveira. Morador de Fortaleza - Ce,
            casado e pai de 3 filhos. Meu whatsup: (85)99956 8243.
          </p>
          <p>
            Já sou desenvolvedor Front-end a mais de 1 ano, comecei nesse
            incrivel mundo devido a pandemia e é claro graças a um amigo meu
            Acrisio Cunha, que devo muito agradecimentos a ele. Depois disso so
            tenho aprendido mais e mais dessa incrivel arte de Programar. Eu sou
            uma pessoa bastante receptivo e gosto muito de tecnologia, tenho ate
            esperiência em algumas delas como, javascript, HTML 5 e CSS 3 e suas
            bibliotecas: ReactJS, typescript, VueJS, Angular 13.
          </p>
        </div>
      </div>
    </main>
  );
};
