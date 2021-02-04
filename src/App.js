import React from "react"
import { Reset } from 'styled-reset'
import { GlobalStyle } from './Global'
import Router from './routes'

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Reset />
      <Router />
    </div>
  );
}

export default App;
