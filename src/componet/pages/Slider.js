import React from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Slider=()=>{
    return(<>
              <Carousel>
                <div>
                    <img src="https://media.istockphoto.com/photos/healthy-food-for-lower-cholesterol-and-heart-care-shot-on-wooden-picture-id1279763992?b=1&k=20&m=1279763992&s=170667a&w=0&h=PP9Z4NeTcx5iZodFRxA4bbRG7QgXef9LCQdIh5lr7oY=" alt="pic"/>
                    <p className="legend ui red header">Loaded Sweet Potato Fries Bowl<br/>Editorial, Food & Drink</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="pic" />
                    <p className="legend ui orange header">Sweet potato and kale bowl</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxoZWFsdGh5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" />
                    <p className="legend ui yellow header">Burrata platter</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1467453678174-768ec283a940?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" />
                    <p className="legend ui olive header"> Food & Drink</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhlYWx0aHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" />
                    <p className="legend ui green header">Editorial, Health & Wellness</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG51dHJpdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic"/>
                    <h2 className="legend ui teal header">healthy, fresh, raw vegetables and fruits</h2>
                </div>

               
               
            </Carousel>

    </>);};
export default Slider;