import react, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selecteddishes } from "../../redux/Action/dishaction";
import axios from "axios";
import "./Bigcard.css"

import { useHistory } from "react-router";


const Dishdetails = ()=>{
  const hist = useHistory();
  const selectdish = useSelector((state)=> state.dish);
 const {dishlabel} = useParams();
 const dispatch = useDispatch();
 
 const urllink = `https://api.edamam.com/search?&app_id=6285f990&app_key=9c46c80cc55cef69db9476a4619e7464&q=${dishlabel}`;

 const fetchDishDetail = async()=>{
     const response = await axios.get(urllink).catch((err)=>{console.log(err);
    alert("sorry data is not found")});
   
   const selecteddata  = await response.data.hits;
  
 const dish =  selecteddata.find((item)=>item.recipe.label===dishlabel);
 dispatch(selecteddishes(dish));
 }
 
console.log(selectdish.cuisineType)

  
 
 useEffect(()=>{

  fetchDishDetail();
  
 },[dishlabel]);

return(<>
<h1 style={{marginTop:"-10rem",marginLeft:"5rem"}}
className="ui mobile hidden button"  data-tooltip="Back" data-position="top left" onClick={()=>hist.push("/recipes")}><i className="arrow left icon"></i></h1>
  {Object.keys(selectdish).length === 0 ?(
    <div class="ui segment">
       <div class="ui active inverted dimmer">
         <div class="ui large text loader">Loading</div>
       </div>
    </div>
  ):(
<div className="container" >


<div className="ui fluid  contanier">

<div className="ui centered header" style={{marginTop:"-9rem"}}><h1>{selectdish.recipe.label}</h1></div>
<div className="ui  centered card" style={{width:"35rem",boxShadow:" rgb(38, 57, 77) 0px 20px 30px -10px",marginTop:"-1rem"}}>
<img src={selectdish.recipe.image} style={{height:"20rem"}} />
</div>
</div>

<div class="ui centered horizontal list" >
  <div class="item">
    <div class="content">
   <h4>Calories</h4>   <a class="header">{selectdish.recipe.calories}</a>
    </div>
  </div>
  <div class="item">
    <div class="content">
    <h4>TotalWeight</h4><a class="header">{selectdish.recipe.totalWeight}</a>
    </div>
  </div>
  <div class="item">
    <div class="content">
    <h4>Yield</h4>   <a class="header">{selectdish.recipe.yield}</a>
    </div>
  </div>
</div>

<hr className="ui green width"/>
<div className="ui left floated  four column grid" style={{width:"35rem"}} >
  <div className="ui column">
    <div className="ui header">DietLabel</div>
   {
    selectdish.recipe.dietLabels.map((item ,i)=>{
  return <li key={i}>{item}</li>  
})}
  </div>
  <div className="ui column">
    <div className="ui header">CuisineType</div>
    {
    selectdish.recipe.cuisineType.map((item ,i)=>{
  return <li key={i}>{item} <i className={`${item.substring(0, item.length - 1)} flag`} style={{fontSize:"3rem"}}></i></li>  
})}
  </div>
  <div className="ui column">
    <div className="ui header">Meal Type</div>
    {
    selectdish.recipe.mealType.map((item ,i)=>{
  return <li key={i}>{item}</li>  
})}
  </div>
  <div className="ui column">
    <div className="ui header">DishType</div>
    {
    selectdish.recipe.dishType.map((item ,i)=>{
  return <li key={i}>{item}</li>  
})}
  </div>
</div>

<h4 className="ui horizontal divider header"><i class="asterisk loading icon"></i>Health<i class="asterisk loading icon"></i></h4>
<div class="ui horizontal  purple piled segment" >
<div class="ui two column very relaxed grid">
<div className="column">
  <h3 className="ui header" > Health-Labels</h3>
  <ol>
    {
      selectdish.recipe.healthLabels.map((item ,i)=>{
  return <li key={i}>{item}</li>  
})
    }
  </ol>
  </div>
  </div>
</div>


        
</div> )}</>);
};
export default Dishdetails;
