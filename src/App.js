import React from 'react';
import './App.css';
import {BrowserRouter, Route,Redirect} from "react-router-dom";
import Windsurf from './Component/Windsurf/Windsurf'
import Surfapparel from './Component/Surfapparel/Surfapparel'
import CurrentElementContainer from './Component/CurrentElement/CurrentElementContainer'
import CartContainer from './Component/Cart/CartContainer'
import Contact from './Component/Contact/Contact'




const App = () =>{
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        
          <div className="app-wrapper-content">
             <Route exact path="/">
                 <Redirect to="/windsurf" />
             </Route>
             <Route path="/windsurf" render={ () => <Windsurf/> } />
             <Route path="/CurrentElement/:slug/:id" render={ () => <CurrentElementContainer /> }/>
             <Route path="/checkout" render={ () => <div>checkout</div> }/>
             <Route path="/Cart" render={ () => <CartContainer/> }/>
             <Route path="/Contact" render={ () => <Contact/> }/>
             <Route path="/productpage" render={ () => <div>productpage</div> }/>
             <Route path="/surfapparel" render={ () => <Surfapparel/> }/>
          </div>
          
      </div>
    </BrowserRouter>  
  );
}

export default App;
