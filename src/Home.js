import React from "react";
import { AppContext,useGlobalContext } from "./context";
import Movies from "./Movies";
import Pagination from "./Pagination";
import Search from "./Search";

const Home=()=>{
  //const name=useContext(AppContext);

  return (
  <>
  <Search />
  <Pagination/>
  <Movies />
  </>
  )
}

export default Home;
