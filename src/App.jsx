import React from 'react'

import {Home} from './components/home';
import {Header} from './components/header';
import {Footer} from './components/footer';

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
      <Header {...CONF}/>

      <Home {...CONF}/>

      <Footer {...CONF}/>
    </>
  )
}

/**
* export default app for the application
*/
export default App
