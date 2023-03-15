import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import "./App.css";
const Movies = () => {
  const {movie,page,nbPage,getPrevPage,getNextPage}=useGlobalContext();

  return (
    <>
    <section className="movie-page">
    <div className="container grid grid-4-col">
     {movie.map((curMovie) => {
      const {_id,StartupName,Induustry,img}=curMovie;
      return (
        <NavLink to={`startup/${StartupName}`} key={_id}>
        <div className="card">
          <div className="card-info">
          <h2>{StartupName}</h2>
          <img src={img} alt={StartupName}/>
        </div> 
        </div>
        </NavLink>
      );
     })}
     </div>
     </section>
    </>
  );
};

export default Movies;