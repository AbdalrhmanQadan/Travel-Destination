import Home from '../src/component/home/Home'
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TourD from '../src/component/TourDetails/TourDetails'
function App() {
  return (
    <>
      <Home />
      <Router path="/" element={<TourD />} />
    </>
  );
}
export default App;
