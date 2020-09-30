import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Windsurf from './Component/Windsurf/Windsurf'
import {WithSuspense} from './Component/HOC/WithSuspense'

const CurrentElementContainer = React.lazy(() => import('./Component/CurrentElement/CurrentElementContainer')),
Surfapparel = React.lazy(() => import('./Component/Surfapparel/Surfapparel')),
CartContainer = React.lazy(() => import('./Component/Cart/CartContainer')),
Contact = React.lazy(() => import('./Component/Contact/Contact'))



const App = () =>{
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-wrapper">
        
          <div className="app-wrapper-content">
            <Route exact path="/">
               <Redirect to="/windsurf" />
            </Route>
            <Route path="/windsurf" render={ () => <Windsurf/> } />
            <Route path="/CurrentElement/:slug/:id" render={WithSuspense(CurrentElementContainer)} />
            <Route path="/Cart" render={WithSuspense(CartContainer)}/>
            <Route path="/Contact" render={WithSuspense(Contact)}/>
            <Route path="/surfapparel"render={WithSuspense(Surfapparel)}/>
          </div>
          
      </div>
    </BrowserRouter>  
  );
}

export default App;
