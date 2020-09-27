import React from 'react'
import classes from './Surfapparel.module.css'
import Header from '../Windsurf/Header/Header';
import SlideSearch from '../Windsurf/Slide/SlideComponent/SlideSearch';
import Footer from '../Windsurf/Footer/Footer';
import Footer2 from '../Windsurf/Footer/Footer2';
import Nav from '../Windsurf/Nav/Nav/Nav';
import NavCategory from '../Windsurf/Nav/NavCategory/NavCategory';
import NavBrand from '../Windsurf/Nav/NavBrand/NavBrand';
import Banner from '../Windsurf/Nav/Banner/Banner';
import TagsWidget from '../Windsurf/Nav/TagsWidget/TagsWidget';
import { connect } from 'react-redux'
import Product from '../Windsurf/NewProduct/Product/Product';
import { NewActiveSlideProduct,ChangeLengthSurfApparel } from '../../redux/ProductReducer';
import SurfApparelHeaderSetting from './SurfApparelHeader/SurfApparelHeaderSetting'
import {ChangeUrl} from '../../redux/NavReducer'
import {Route,NavLink} from "react-router-dom";
import CurrentElement from '../CurrentElement/CurrentElement';




const Surfapparel = (props) =>{
	const handleChange = (e) =>{
		props.ChangeLengthSurfApparel(e.target.value)
	}
	return <section className={classes.section}>
		<div className={classes.Blue}>
          <div className={classes.Top}>
            <Header />
            <SlideSearch />
          </div>
        </div>
        <div className={classes.White}>
          <div className={classes.Center}>
          	<div className={classes.Left}>
          		<div className={classes.Nav}><Nav/></div>
          		<div className={classes.Nav}><NavCategory/></div>
          		<div className={classes.Nav}><NavBrand/></div>
          		<div className={classes.Other}><TagsWidget style={props.Style} NewStyle={props.NewStyle}/></div>
          		<div><Banner url={`https://i.pinimg.com/280x280_RS/f0/ec/43/f0ec4348d1ccbff9cdddc1d9f4fb8c01.jpg`}/></div> 	
          	</div>
          	<div className={classes.Right}>
        			<div className={classes.Head_txt}>
              <div className={classes.Head_txt_L}>
                <div>Home &#187;&nbsp;</div>
                <div>Apparel &#187;&nbsp;</div>
                {props.Category ? <div className={classes.yellow}>{props.Category}&nbsp;&#187;</div>:''}
                {props.Brand ? <div className={classes.yellow}>&nbsp;{props.Brand}</div>:''}
                </div>
              <NavLink className={classes.NavLink} to="/" onClick={() => {props.ChangeUrl('','')}}>&#171; Back to previous page</NavLink>
            </div>

            <Route exact path="/surfapparel">
              <SurfApparelHeaderSetting handleChange={handleChange} ActivePage={props.ActivePage} NewActiveSlideProduct={props.NewActiveSlideProduct}/>

            <div className={classes.Overflow}>
              <div className={classes.slideUp}> 
                  {props.SurfProduct.filter(el => el.id <= props.ActivePage * props.LengthSurfApparel && el.id > props.ActivePage * props.LengthSurfApparel - props.LengthSurfApparel)
                    .map(el => { return <Product img={el.img} Prise={el.Prise} Sale={el.Sale} text={el.text} key={el.id} id={el.id} urlPage={'SurfProduct'}/>})}
              </div>      
            </div>

            <SurfApparelHeaderSetting handleChange={handleChange} ActivePage={props.ActivePage} NewActiveSlideProduct={props.NewActiveSlideProduct}/>

            </Route>
            <Route path="/surfapparel/:slug">
              <CurrentElement/>
            </Route>
        		
          	</div>
	        </div>
	        <div className={classes.Instagram}>
				{props.Messegers.map( el => { return <img src={el} alt="" key={el}/>})}
			</div>
        </div>
        <div className={classes.Gray}>
          <div className={classes.Bottom}>
            <Footer/>
          </div>
        </div>
        <div className={classes.Gray2}>
          <div className={classes.Bottom}>
            <Footer2/>
          </div>
        </div>
	</section>
}

const mapStateToProps = (state) => {
    return{
    	ActivePage:state.Products.ActivePageFromSurfApparel,
    	SurfProduct:state.Products.SurfProduct,
    	LengthSurfApparel:state.Products.LengthSurfApparel,
    	Messegers:state.Instagram.Messegers,
      Category:state.Nav.Category,
      Brand:state.Nav.Brand      
    }
}


export default connect(mapStateToProps,{NewActiveSlideProduct,ChangeLengthSurfApparel,ChangeUrl})(Surfapparel)
