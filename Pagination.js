import React from "react";
import "./App.css";
import { useGlobalContext } from "./context";
const Pagination = ()=>{
    const {page,nbPage,getPrevPage,getNextPage} = useGlobalContext();
    return<>
        <div className="pagination_btn">
            <button className="btn" onClick={()=>getPrevPage()}>PREV</button>
            <p className="card-text">{page} of {nbPage}</p>
             <button className="btn" onClick={()=>getNextPage()}>NEXT</button> 
        </div>
    </>
}
export default Pagination