import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Search = () => {
   const { query, setQuery, isError,nbPage,page,setPage } = useGlobalContext();
const twoCalls=e=>{
  setPage(1)
  setQuery(e.target.value.substring(0,1).toUpperCase() + e.target.value.substring(1))
}
  return (
    <>
     <NavLink to={'signup'} className="signup">
          <h4>Send for new Startup</h4>
        </NavLink>
       <section className="search-section">
        <h2>Search The Startup</h2>
         <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search Startup"
              value={query}
              onChange={ twoCalls } 
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section> 
      
    </>
  );
};

export default Search;