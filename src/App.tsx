import React from 'react';
import './App.css';
import Tabbar from './components/ReactRouterTest/Tabbar'
import MainRouter from './router/IndexRouter';

function App() {
  return (
    <div>
      <MainRouter>
        <Tabbar></Tabbar>
      </MainRouter>
    </div>
  );
}

export default App;
