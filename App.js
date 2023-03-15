import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import Pagination from "./Pagination";
import Signup from "./Signup";
const App=()=>{
  return <> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="startup/:id" element={<SingleMovie />} />
      <Route path="startup/:id" element={<Pagination />} />
      <Route path="/Signup" element={<Signup/> }/>
      <Route path="*" element={<Error />}/>
    </Routes>
  </>
};

export default App;
