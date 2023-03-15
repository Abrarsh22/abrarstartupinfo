import React,{useState,useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";

import "./App.css";
const API_URL = `https://glory-phantom-plant.glitch.me/api/products`;
const SingleMovie = () => {
  const [query, setQuery] = useState("Flipkart");
   const { isLoading, setIsLoading } = useState(true);
   const [movie,setMovie] = useState([]);
  const { id } = useParams();
  console.log(id);
  //const {page,nbPage,getPrevPage,getNextPage} = useGlobalContext();
 // const { isLoading, movie, isError } = useFetch(`&i=${id}`);
 
 const getMovies = async (url)=>{
  try{
    const res=await fetch(url);
    const data =await res.json();
    console.log(data.startups);
  //setIsLoading(false);
    setMovie(data.startups);
    
  }catch(error){
    console.log(error);
  }
}
 useEffect(()=>{
    getMovies(`${API_URL}?StartupName=${id}`);
},[query])
  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <>
    
      {movie.map((curMovie) => {
      const {_id,StartupName,Industry,img,FoundingYear,Valuation,Headquarters,ProductsandServices
      ,CurrentValuation,Founders,UnicornEntryYear,Acquisitions,IPOStatus,Profitin2021,Founded}=curMovie;
      return(
        <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">StartupName: {StartupName}</p>
          <p className="card-text">Industry: {Industry}</p>
          <p className="card-text">FoundingYear: {FoundingYear}, Unicorn Entry Year:{UnicornEntryYear}</p>
          <p className="card-text">Valuation: {Valuation} </p>
          <p className="card-text">Curent Valuation: {CurrentValuation}</p>
          <p className="card-text">Acquisitions: {Acquisitions},    IPOStatus:{IPOStatus}</p>
          <p className="card-text">Valuation: {Valuation} </p>
          <p className="card-text">Profit in 2021: {Profitin2021.substring(1)}</p>
          <p className="card-text">Headquarters: {Headquarters}</p>
          <p className="card-text">Founders: {Founders}</p>
          <p className="card-text">Also Founded: {Founded}</p>
          <p className="card-text">Services: {ProductsandServices}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          </div>
          </div>
    </section>          
      )
        })};
    </>
  );
};

export default SingleMovie;