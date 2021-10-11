import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";

const Dish = ()=>{
 const mydishes = useSelector((state)=>state.alldishes.dishes);

   const card =  mydishes.map((item)=>{
     const {id,ingredientLines, image,label,source} = item.recipe;
     
     return(<>
      {Object.keys(item.recipe).length === 0 ?(
        <div class="ui segment">
           <div class="ui active inverted dimmer">
             <div class="ui large text loader">Loading</div>
           </div>
        </div>
      ):(
        <div className="ui raised link card" style={{}}>
      <Link to ={`/recipes/${label}`}>
      <div className="image">
       <img src={image} alt="pic" style={{width:"100%",alignContent:"center"}}/>
      </div>
    
    <div className="content" key={id}>
      <div className="ui center header">
        <h2>{label}</h2>
       <a className="ui green tag label" style={{margin:"1rem 2rem"}}>{source}</a>
      </div>
    </div>
    </Link>
  </div>
      )}

    </> )
   })
   
    return(<>
   {card}
   <div class="ui top banner test ad" data-text="ad" style={{width:"100%"}}></div>
  </>
     )
;};
export default Dish;
/*
<div class="ui raised link card">
      <Link to ={`/recipes/${label}`}>
      <div class="image">
       <img src={image} alt="pic" style={{width:""}}/>
      </div>
    
    <div class="content" key={id}>
      <div class="ui center header">
        <h2>{label}</h2>
        <b>{source}</b> 
      </div>
    </div>
    </Link>
  </div>*/
    


  // <div className="ui raised link card" style={{}}>
  //     <Link to ={`/recipes/${label}`}>
  //     <div className="image">
  //      <img src={image} alt="pic" style={{width:"100%",alignContent:"center"}}/>
  //     </div>
    
  //   <div className="content" key={id}>
  //     <div className="ui center header">
  //       <h2>{label}</h2>
  //      <a className="ui green tag label" style={{margin:"1rem 2rem"}}>{source}</a>
  //     </div>
  //   </div>
  //   </Link>
  // </div>