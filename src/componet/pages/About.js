import React from 'react';
import Footer from './Footer';
import "../Navbar.css";
const pic = "https://images.unsplash.com/photo-1555243896-c709bfa0b564?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMG51dHJpdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60";
const  About=()=> {
  return (<>
    <div className="container" style={{backgroundColor:'rgba(227, 206, 129, 0.048)',marginTop:'-7rem'}}>
    <h2>Whip up a custom nutrition label and start making healthier choices!</h2>
    <div className="ui right aligned container">
      <h5>Try Our Recipe Nutrition Calculator</h5>
    </div>
    <div className="ui divider"></div>
    <article>
    HealthIsWealth.com provides nutrition data tools and articles to empower you to create a better diet.<br/> All data is sourced from the <a href="www.edamam.com">Edamam LLC</a>.<br/>

Our commitment is to provide high quality data and easy to use tools.</article>
<div className="ui right aligned container">
      <article>We are about eating better. Our goal is to capture the world's food knowledge and distill it to help you make informed choices at the store and in the kitchen.</article>
    </div>
   <div className="ui two column grid">
     <div className="column">
     <img class="ui small circular image" src="https://avatars.githubusercontent.com/u/87180411?v=4"/>
   <address>Pramod Mahajan<i class="smile icon"></i></address>
     </div>
     <div className="column">
      <div className="ui contaiber">
        <h3>About Me</h3>
        <div className="ui divider"></div>
        <article>Making knowledge and information ubiquitous really excites me. This is what semantics and internet can do best – decipher information and bring it to everyone’s doorstep.</article>
        <h3>Contact us</h3>
        <div className="ui divider"></div>
        <h6>Hii I am <b>Jr Mern Stack Developer</b></h6>
        <button class="ui facebook button">
  <i class="facebook icon"></i>
  Facebook
</button>
<button class="ui linkedin button">
  <i class="linkedin icon"></i>
  LinkedIn
</button>
<button class="ui instagram button">
  <i class="instagram icon"></i>
  Instagram
</button>
      </div>

      
     </div>
   </div>
   </div>
   <Footer/>
 </> );
}

export default About;