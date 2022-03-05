import Home from '../src/component/home/Home'
import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import TourD from '../src/component/TourDetails/TourDetails'
import Nav from '../src/component/header/Header'
import Data from './data/db.json'
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/details/:id" element={<TourD data={Data} />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  );
}
export default App;
