import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componet/pages/Home';
import Recipes from './componet/pages/Recipes';
import Dishdetails from "./componet/pages/Dishdetails";
import About from './componet/pages/About';
import Navbar from "./componet/Navbar";

const App =()=>{
  
  return(<>
 <Router>

        
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/recipes' exact component={Recipes} />
          
          
          <Route path='/recipes/:dishlabel' exact  component={Dishdetails} />
          <Route path='/about' component={About} />
         
          <Route>404</Route>

        </Switch>
  
      </Router>
  </>)
}

export default App;