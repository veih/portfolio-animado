import React from 'react';

import './App.css';

import { Header } from './components/Headers';
import { Routers } from './Routers';
import { Title } from './components/Titles';

function App() {

  return (
    <>
      <header>
        <Header />
        <Title  />
      </header>

      <div className='body bg-pan-bottom'>
        <Routers />
      </div>
    </>
  )
}

export default App
