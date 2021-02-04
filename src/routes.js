import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home, AddOrcamento } from './pages/index';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/AddOrcamento" exact component={AddOrcamento} />
    </BrowserRouter>
  );
}

export default Routes;