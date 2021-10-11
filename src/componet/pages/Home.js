import React from 'react';
import { useHistory } from 'react-router';
import { ImHome } from "react-icons/im";
import { useSelector } from 'react-redux';
import Slider from './Slider';
import { FcHome } from "react-icons/fc";
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Home=()=> {
  const mydishes = useSelector((state)=>state.alldishes.dishes);
  const hist = useHistory();
  return (<>
<div className="container" style={{marginTop:"-4rem"}}>
<h1 className="ui green label"><ImHome/></h1>

<div  ><Slider /></div>
 
  <h1>The Definitive Guide to Healthy Eating in Real Life</h1>
  <div className="ui container" style={{margin:"1rem"}}>

  <img className="ui small left floated image" src="https://www.edamam.com/web-img/f50/f50509474d97878a4ef25443fc790d2f.jpg" alt="pic"/>
  
 <p> Depending on whom you ask,<b> “healthy eating”</b> may take any number of forms.
   It seems that everyone, 
  including healthcare professionals, wellness influencers, coworkers,
   and family members, has an opinion on the healthiest way to eat.</p>
   <p>Plus, nutrition articles that you read online can be downright confusing with 
   their contradictory — and often unfounded — suggestions and rules.</p>
   <p>This doesn’t make it easy if you simply want to eat in a healthy way that works for you.</p>
   <p>The truth is, healthy eating doesn’t have to be complicated. It’s entirely possible to nourish your body while enjoying the foods you love.</p>
   <p>After all, food is meant to be enjoyed — not feared, counted, weighed, and tracked.</p>
   <img className="ui small right floated image" src="https://www.edamam.com/web-img/2e7/2e72bfd9972a08c99c9022e88c10cb8b" alt="pic" />
   <p>Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there,
    you’re not alone. It seems that for every expert who tells
    you a certain food is good for you, you’ll find another saying exactly the opposite. The truth is that while some specific foods or nutrients 
   have been shown to have a beneficial effect on mood, it’s your overall dietary pattern that is most important. The cornerstone of a
    healthy diet should be to replace processed food with real food whenever possible. Eating food that is as close as possible to the
     way nature made it can make a huge difference to the way you think, look, and feel.</p>
     <p>A healthy eating pattern should be primarily composed of whole foods like vegetables, fruits, beans, 
     nuts, seeds, whole grains, and protein sources like eggs and fish. Hydrate the smart way.
      Staying hydrated is part of healthy eating, and water is the best way to stay hydrated.</p>
      
  </div>
  
  <div className="ui three column grid">
  
  <div className="column">
    <div class="ui small fluid image">
      <div className="ui blue ribbon label">
        <i className="spoon icon"></i> Food
      </div>
      <img  src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG51dHJpdGlvbmFsaXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic"/>
    </div>
  </div>
  <div className="column">
  <div class="ui vertical banner test ad" data-text="Ad"></div>
  </div>
  <div className="column">
    <div className="ui small fluid image">
      <div className="ui blue ribbon label">
        <i className="spoon icon"></i> Food
      </div>
      <img  src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnV0cml0aW9uYWxpc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" />
    </div>
  </div>
</div>
  
  <div className="container">            
  <h1>Source</h1>
  <a className="ui red label" data-tooltip="Go to BBC GOOD FOOD" data-position="top left" style={{margin:"0.10rem"}} onClick={()=>hist.push('/recipes')}>BBC Good Food</a>
  <Link to="/recipes/Food Network"><a className="ui orange label" data-tooltip="GO TO FOOD NETWORK" data-position="top left" style={{margin:"0.10rem"}}>Food Network</a></Link>
  <Link to="/recipes/PBS Food"><a className="ui yellow label" data-tooltip="GO TO FOOD PBS FOOD" data-position="top left" style={{margin:"0.10rem"}}>PBS Food</a></Link>
  <Link to="/recipes/EatingWell"><a className="ui olive label" data-tooltip="GO TO EATINGWELL" data-position="top left" style={{margin:"0.10rem"}}>EatingWell</a></Link>
  <Link to="/recipes/This Rawsome Vegan Life"><a className="ui green label" data-tooltip="GO TO THIS RAWSOME VEGAN LIFE" data-position="top left" style={{margin:"0.10rem"}}>This Rawsome Vegan Life</a></Link>
  <Link to="/recipes/Oh She Glows"><a class="ui teal label" data-tooltip="GO TO OH SHE GLOWS" data-position="top left" style={{margin:"0.10rem"}}>Oh She Glows</a></Link>
  <Link to="/recipes/Food52"><a class="ui blue label" data-tooltip="GO TO FOOOD52" data-position="top left" style={{margin:"0.10rem"}}>Food52</a></Link>
  <Link to="/recipes/Epicurious"><a class="ui violet label" data-tooltip="GO TO EQICURIOUS" data-position="top left" style={{margin:"0.10rem"}}>Epicurious</a></Link>
  <Link to="/recipes/The Daily Meal"><a class="ui purple label" data-tooltip="GO TO THE DAILY MEAL" data-position="top left" style={{margin:"0.10rem"}}>The Daily Meal</a></Link>
  <Link to="/recipes/Tasting Table"><a class="ui pink label" data-tooltip="GO TO TASTING TABEL" data-position="top left" style={{margin:"0.10rem"}}>Tasting Table</a></Link>
  <Link to="/recipes/101 CookBooks"><a class="ui brown label" data-tooltip="GO TO 101 COOKBOOKS" data-position="top left" style={{margin:"0.10rem"}}>101 CookBooks</a></Link>
  <Link to="/recipes/Martha Stewart"><a class="ui grey label" data-tooltip="GO TO MARTHA STEWART" data-position="top left" style={{margin:"0.10rem"}}>Martha Stewart</a></Link>
  <a class="ui black label">Black</a>
  </div>

  
<div className="ui two column grid" style={{marginTop:"1rem"}}> 
 <div className="ui left floated ">
   <h1>Eating Vegetables Will Improve Your Health</h1>
   <p>Vegetables are good for you.</p>
   <p>They are rich in vitamins, minerals, fiber, antioxidants 
   and an endless variety of trace nutrients that science has just begun to uncover.</p>
   <p>In observational studies, eating vegetables is associated with improved health and a lower risk of disease</p>
   <p>I recommend that you eat a variety of vegetables each day. 
   They are healthy, fulfilling and add variety to your diet.</p>
 </div> 
 <div className="ui right floated">
 <div class="ui vertical rectangle test ad"  ></div>
 </div>
 <div className="ui left floated" style={{marginTop:"1rem"}}>
  <h1>Supplements Can Never Fully Replace Real Foods</h1>
  <p>“Nutritionism” is the idea that foods are nothing more than the sum of their individual nutrients.</p>
  <p>But it’s also a trap that many nutrition enthusiasts tend to fall into.</p>
  <p>Nuts, for example, aren’t just shells loaded with polyunsaturated fat. In the same way,
   fruits aren’t just watery bags of sugar.</p>
   <p>These are real foods with a massive variety of trace nutrients.</p>
   <p>The vitamins and minerals, the ones you can also get from a cheap multivitamin, are just a small part of the total amount of nutrients in foods.</p>
   <p>Therefore, supplements cannot match the variety of nutrients you get from real foods.</p>
   <p>However, many supplements can be beneficial, especially those that contain nutrients that are generally lacking in the diet, like vitamin D.</p>
   <p>But no amount of supplements will ever make up for a bad diet. Not a chance.</p>
</div>
 </div>



</div><Footer/> </> );
}

export default Home;