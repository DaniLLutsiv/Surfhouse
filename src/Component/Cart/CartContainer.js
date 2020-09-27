import React from 'react'
import classes from '../Surfapparel/Surfapparel.module.css'
import Header from '../Windsurf/Header/Header';
import Nav from '../Windsurf/Nav/Nav/Nav';
import NavCategory from '../Windsurf/Nav/NavCategory/NavCategory';
import NavBrand from '../Windsurf/Nav/NavBrand/NavBrand';
import TagsWidget from '../Windsurf/Nav/TagsWidget/TagsWidget';
import Banner from '../Windsurf/Nav/Banner/Banner';
import Footer from '../Windsurf/Footer/Footer';
import Footer2 from '../Windsurf/Footer/Footer2';
import { connect } from 'react-redux'
import {NavLink,Route} from "react-router-dom";
import { ChangeUrl } from '../../redux/NavReducer';
import { ChangeLengthSurfApparel, NewActiveSlideProduct,ActiveTabsChange } from '../../redux/ProductReducer';
import {DeleteElemFromCart,QuantityChange} from '../../redux/CartReducer';
import Cart from './Cart'
import Checkout from '../Checkout/Checkout'
import Articles from '../Windsurf/Nav/Articles/Articles';

const CartContainer = (props) =>{

  return <section className={classes.section}>
    <div className={classes.Blue}>
          <div className={classes.Top}>
            <Header />
          </div>
        </div>
        <div className={classes.White} style={{marginTop:-132+'px'}}>
          <div className={classes.Center}>
            <div className={classes.Left}>
              <div className={classes.Nav}><Nav/></div>
              <Route exact path="/Cart"  render={ () => <div className={classes.Nav}><NavCategory/></div> }/>
              <Route exact path="/Cart"  render={ () => <div className={classes.Nav}><NavBrand/></div> }/>
              <Route exact path="/Cart"  render={ () => <div className={classes.Other}><TagsWidget style={props.Style} NewStyle={props.NewStyle}/></div> }/>
              <div className={classes.Banner}><Banner url={`https://i.pinimg.com/280x280_RS/f0/ec/43/f0ec4348d1ccbff9cdddc1d9f4fb8c01.jpg`}/></div> 
              <Articles/> 
            </div>
            <div className={classes.Right} style={{backgroundColor:'#fff', padding:26+'px', marginTop:-2}} >
              <div className={classes.Head_txt} style={{marginBottom:0}}>
                <div className={classes.Head_txt_L}>
                  <div>Home &#187;&nbsp;</div>
                  <div className={classes.yellow}>Shopping Cart</div>
                </div>
              <NavLink className={classes.NavLink} to="/" onClick={() => {props.ChangeUrl('','')}}>&#171; Back to previous page</NavLink>
            </div>

              <Route path="/Cart/Checkout" render={ () => <Checkout Prise={props.Prise} cart_product={props.Product}/> }/>


              <Route exact path="/Cart" render={ () => <Cart SurfProduct={props.SurfProduct} SaleProducts={props.SaleProducts} ActivePageSale={props.ActivePageSale} 
              cart_product={props.Product} ActivePageFromSurfApparel={props.ActivePageFromSurfApparel} Prise={props.Prise}
              NewActiveSlideProduct={props.NewActiveSlideProduct} DeleteElemFromCart={props.DeleteElemFromCart} QuantityChange={props.QuantityChange}/> }/>


              
              
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
      Messegers:state.Instagram.Messegers,
      ActivePageSale:state.Products.ActivePageSaleProducts,
      SaleProducts:state.Products.SaleProducts,
      ActivePageFromSurfApparel:state.Products.ActivePageFromSurfApparel,
      SurfProduct:state.Products.SurfProduct,
      Product:state.Cart.Product,
      Prise:state.Cart.Prise      
    }
}

export default connect(mapStateToProps,{DeleteElemFromCart,NewActiveSlideProduct,ChangeLengthSurfApparel,ChangeUrl,ActiveTabsChange,QuantityChange})(CartContainer)

