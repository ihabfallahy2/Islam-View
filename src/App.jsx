import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Home } from './components/home';
import { Quran } from './components/quran';
import { Accord } from './components/accord';
import { Header } from './components/header';
import { Footer } from './components/footer';

/**
*This function is used to import the config map.
*/
import * as CONF from './CONFIGMAP/config-details.json';

/**
* This is the main application.
*/
function App() {

  return (
    <>
      <Header {...CONF} />

      <Routes>
        <Route path="/" element={ <Home {...CONF}/>} />
        <Route path="/quran" element={<Quran {...CONF}/>} />
        <Route path="/quran/chapter/:id" element={<Accord {...CONF}/>} />
      </Routes>

      <Footer {...CONF} />
    </>
  )
}

/**
* export default app for the application
*/
export default App
