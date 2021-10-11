import React, { useEffect, useState } from 'react';
import Dish from './dish';
import { useParams } from 'react-router';
import "../../App.css";
import axios from 'axios';
import {setdishes }from "../../redux/Action/dishaction";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import { useHistory } from 'react-router';
import { ItemContent } from 'semantic-ui-react';
const Recipes=()=>{
  const [item,setitem] =useState("");
  const [search,setsearch] =useState();
 console.log(search)
  const hist = useHistory();
  const mydishes = useSelector((state)=>state);
  const dispatch = useDispatch();
 
  const API_URL =`https://api.edamam.com/search?&app_id=6285f990&app_key=9c46c80cc55cef69db9476a4619e7464&q=${search}`;
  const fetchdata =async()=>{
   
      const response = await axios.get(API_URL).catch((err)=>{console.log(err);
      alert("chek your internet connection");
      
    });
      const totaldata = await response;
    
      dispatch(setdishes(totaldata.data.hits));
      
  }
useEffect(()=>{
   fetchdata();
},[]);
 
const inputevent=(e)=>{
  setitem(e.target.value);
}
const additem =(e)=>{
  e.preventDefault();
   setsearch(item);
   fetchdata();
}
  

  return( <>
  <div className="container" style={{marginTop:"-6rem"}}>
  <h1>Search Recipes</h1>
  <h1 className="ui button"  data-tooltip="Back" data-position="top left" onClick={()=>hist.push("/")}><i className="arrow left icon"></i></h1>
    <div className="ui fluid action input">
          <input type="text" value={item}
                onChange={inputevent}
                placeholder="Search..."/>
    <div className="ui purple button" onClick={additem} >Search</div>
  </div>
  
 <h1>All Recipes</h1>
  <div class="ui segment">
  <div class="ui ui three stackable cards">
  
  
    <Dish/>
    
    
    </div>
    
</div>
<div className="container" style={{marginTop:"3rem"}}>
</div>
 <div class="column">
    <div class="ui raised segment">
      <a class="ui red ribbon label">Healthy lunches</a>
      <span><h2>Nutritious midday meals</h2></span>
      <p>This selection of healthy lunches gives you flavour and
       variety of ingredients for a balanced diet. 
      Tuck into pasta, loaded wraps and hearty soups.</p>
      <a class="ui blue ribbon label">Choose these foods</a><h2>Dairy and dairy substitutes</h2>
      <li>Low-fat, skim, nut, or enriched milk, like soy or rice.</li>
      <li>Skim ricotta cheese in place of cream cheese.</li>
      <li>Low-fat cottage cheese.</li>
      <li>String cheese.</li>
      <li>Plain nonfat yogurt in place of sour cream.</li>
    </div>
  </div>
 
 </div><Footer/></> )
};

export default Recipes;



/*<div class="ui raised link card">

    <div class="image">
     <img src={} alt="pic" />
    </div>
  
  <div class="extra content">
    <div class="meta">
      <h2>{}</h2>
      <b>{}</b> 
    </div>
  </div>
</div>*/