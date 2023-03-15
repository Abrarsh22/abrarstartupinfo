import React, { useContext, useEffect, useReducer, useState } from "react";
import useFetch from "./Signup";

const API_URL = `https://glory-phantom-plant.glitch.me/api/products`;
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  
   const [query, setQuery] = useState("");
   const { isLoading, setIsLoading } = useState(true);
   const [movie,setMovie] = useState([]);
   let nbPage=3;
   let [page,setPage]=useState(1);
   const [isError,setIsError]=useState({show:"false",msg:""});
  let data1=([]);
  const getMovies = async (url)=>{
    try{
      const res=await fetch(url);
      //setIsLoading(false);
      const data =await res.json();
      console.log(data);
      setMovie(data.startups);
      data1=data;
      
      //console.log(data.nbHits);
    }catch(error){
      console.log(error);
    }
    console.log(data1);

  }

  const getNextPage=()=>{
    if(page<nbPage){
     // console.log(data1);
    page=page+1;
    setPage(page);
   //setMovie(data1.startups);
   console.log(`${page}`);
  }
  }
  const getPrevPage=()=>{
    if(page>1){
    page=page-1;
    setPage(page);
  //  setMovie(data.startups);
   console.log(`${page}`);
  }
  }

  useEffect(()=>{
    let timerOut=setTimeout(()=>{
        getMovies(`${API_URL}?StartupName=${query}&page=${page}`);
      console.log(`${API_URL}?StartupName=${query}&page=${page}`);
    },500);
    return () => clearTimeout(timerOut);
  },[query,page])

  return (
    <AppContext.Provider value={{isLoading,isError,movie,query,setQuery,nbPage,page,getNextPage,setPage,getPrevPage}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };