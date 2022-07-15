import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from 'react-router-dom';
import Home from "./Pages/Home";
import ListBerita from "./Pages/ListBerita";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/berita' element={<ListBerita />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
