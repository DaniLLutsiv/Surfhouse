import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Slide from './Slide/Slide'
import NavContainer from './Nav/NavContainer'
import NewProduct from './NewProduct/NewProduct'
import Brand from './Brand/Brand'
import Instagram from './Instagram/Instagram'
import Footer2 from './Footer/Footer2'
import {Route} from "react-router-dom"
import CurrentElement from '../CurrentElement/CurrentElement'

const Windsurf = (props) =>{
	return <section>
		<div className="Blue">
          <div className="Top">
            <Header />
            <Slide />
          </div>
        </div>
        <div className="White">
          <div className="Center">
            <NavContainer />
            <Route exact path="/windsurf">
              <NewProduct />
            </Route>
            <Route path="/windsurf/:slug">
              <CurrentElement/>
            </Route>

          </div>
          <Brand />
          <Instagram /> 
        </div>
        <div className="Gray">
          <div className="Bottom">
            <Footer/>
          </div>
        </div>
        <div className="Gray2">
          <div className="Bottom">
            <Footer2/>
          </div>
        </div>
	</section>
}
export default Windsurf
