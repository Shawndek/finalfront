import { Route, Routes, } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import React from 'react';



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='*' element={<div>NotFound</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
