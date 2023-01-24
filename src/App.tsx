import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RenderRootRoutes } from './routes/RenderRoutes';
import { ReduxProvider } from './state/ReduxProvider';

import './App.css';

function App() {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <RenderRootRoutes />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
