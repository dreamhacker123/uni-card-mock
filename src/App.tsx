import React from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { PageRoutes } from './pages/PageRoutes';


const App = ():JSX.Element=> {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <PageRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
