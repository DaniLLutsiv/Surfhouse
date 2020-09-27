import React from 'react'
import classes from '../Surfapparel/Surfapparel.module.css'
import CurrentElement from './CurrentElement'
import Header from '../Windsurf/Header/Header';
import SlideSearch from '../Windsurf/Slide/SlideComponent/SlideSearch';
import Nav from '../Windsurf/Nav/Nav/Nav';
import NavCategory from '../Windsurf/Nav/NavCategory/NavCategory';
import NavBrand from '../Windsurf/Nav/NavBrand/NavBrand';
import TagsWidget from '../Windsurf/Nav/TagsWidget/TagsWidget';
import Banner from '../Windsurf/Nav/Banner/Banner';
import Footer from '../Windsurf/Footer/Footer';
import Footer2 from '../Windsurf/Footer/Footer2';
import { connect } from 'react-redux'
import {NavLink} from "react-router-dom";
import { ChangeUrl } from '../../redux/NavReducer';
import { NewActiveSlideProduct,QuantityChange,ActiveTabsChange } from '../../redux/ProductReducer';
import {AddProductToCart} from '../../redux/CartReducer'

const CurrentElementContainer = (props) =>{
  
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
                  {props.Category ? <div className={classes.yellow}>{props.Category}&#187;&nbsp;</div>:''}
                  {props.Brand ? <div className={classes.yellow}>{props.Brand}</div>:''}
                </div>
              <NavLink className={classes.NavLink} to="/" onClick={() => {props.ChangeUrl('','')}}>&#171; Back to previous page</NavLink>
            </div>

              <CurrentElement SurfProduct={props.SurfProduct} LengthSurfApparel={props.LengthSurfApparel} SaleProducts={props.SaleProducts}
              TopProducts={props.TopProducts} ActivePageSale={props.ActivePageSale} ActivePageTop={props.ActivePageTop} AddProductToCart={props.AddProductToCart}
              Quantity={props.Quantity} ActiveTabs={props.ActiveTabs} NewProducts={props.NewProducts} ChangeUrl={props.ChangeUrl} QuantityChange={props.QuantityChange}
              NewActiveSlideProduct={props.NewActiveSlideProduct} ChangeLengthSurfApparel={props.ChangeLengthSurfApparel} ActiveTabsChange={props.ActiveTabsChange}/>

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
      Brand:state.Nav.Brand,
      TopProducts:state.Products.TopProducts,
      ActivePageTop:state.Products.ActivePageTopProducts,
      Quantity:state.Products.Quantity,
      ActiveTabs:state.Products.ActiveTabs,
      NewProducts:state.Products.NewProducts,
      ActivePageSale:state.Products.ActivePageSaleProducts,
      SaleProducts:state.Products.SaleProducts      
    }
}

export default connect(mapStateToProps,{NewActiveSlideProduct,
  ChangeUrl,ActiveTabsChange,QuantityChange,AddProductToCart})(CurrentElementContainer)

