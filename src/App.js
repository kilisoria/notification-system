import React, { useState } from 'react';

import {
  RouterProvider,
} from "react-router-dom";

import AppContext from "./AppContext.jsx";

import router from './routes';

import Header from './components/Header';

import { TABS } from './common/constants';

import './App.css';

function App() {
  const [tabSelectedValue, setTabSelectedValue] = useState(TABS.HOME);
  
  return (
    <div className="App">
      <AppContext.Provider value={{ tabSelected: tabSelectedValue, setTabSelectedValue }}>
        <Header />
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
