import React from 'react'
import classes from './Cart.module.css'
import Product from '../Windsurf/NewProduct/Product/Product'
import {NavLink} from "react-router-dom";


const Cart = (props) =>{

  return <section className={classes.section}>
    <div className={classes.Cart_body}>
      <div className={classes.step}>
        <div className={classes.circle_active}>1</div>
        <h2 className={classes.h2_active}>Shopping Cart</h2>
        <div className={classes.circle}>2</div>
        <h2>checkout</h2>
        <div className={classes.circle}>3</div>
        <h2>order confirmation</h2>
      </div>
      <div className={classes.Flex}>
        <div>
          <div className={classes.discription}>
            <div className={classes.product_name}>PRODUCT NAME</div>
            <div>UNIT PRICE</div>
            <div>QTY</div>
            <div>SUBTOTAL</div>
          </div>
          <div>
            {props.cart_product.map((el,index) => <div key={el.id + index} className={classes.Flex}>
                <div className={classes.Product} >
                  <img src={el.img} alt="" className={classes.img}/>
                  <div className={classes.ProductName}>
                    <h3>{el.text}</h3>
                    <div className={classes.overviev}>{el.QuickOverview}</div>
                    <img src={process.env.PUBLIC_URL + `/img/images/index_06.png`} alt="" className={classes.icon}/>
                    <img src={process.env.PUBLIC_URL + `/img/images/index_08.png`} alt="" className={classes.icon}/>
                    <img src={process.env.PUBLIC_URL + `/img/images/index_12.png`} alt="" className={classes.icon}/>
                  </div>
                  <div className={classes.Prise}>
                    <div>{el.Prise}</div>
                  </div>
                  <div className={classes.Quantity}>
                    <div className={classes.plus} onClick={() => props.QuantityChange(el.Quantity-1,index)}>-</div>
                    <div className={classes.Quant}>{el.Quantity? el.Quantity : 1}</div>
                    <div className={classes.plus} onClick={() => props.QuantityChange(el.Quantity+1,index)}>+</div>
                  </div>
                  <div className={classes.Prise}>€.{el.Prise}</div>
                </div>
                <img src={process.env.PUBLIC_URL + `/img/images/index_2.jpg`} alt="" className={classes.x} 
                onClick={() => props.DeleteElemFromCart(index)}/>
                
              </div>)}
            
            <div className={classes.Coupon}>HAVE YOU GOT A COUPON CODE?</div>
            <div className={classes.Flex}>
              <input type="text" placeholder="INSECR CODE"/>
              <div className={classes.Update_shopping}>
                <div className={classes.Update_cart}>update shopping cart</div>
                <div className={classes.Continue}>or continue shopping</div>
              </div>
            </div>
          </div>
        </div>   
          <div className={classes.Review}>
            <h3>REVIEW YOUR CART</h3>
            <div className={classes.Review_el}>
              <div>YOUR CART</div>
              <div>€.{props.Prise.toFixed(2)}</div>
            </div>
            <div className={classes.Review_el}>
              <div>SHIPPING</div>
              <div>FREE</div>
            </div>
            <div className={classes.Review_el}>
              <div>vat</div>
              <div>€.{props.vat}</div>
            </div>
            <div className={classes.Review_elem}>
              <div>ORDER TOTAL</div>
              <div>€.{(props.vat + props.Prise).toFixed(2)}</div>
            </div>
            <div  className={classes.Checkout}>
              <NavLink to="/Cart/Checkout">
                Checkout
              </NavLink>
            </div>
          </div>
      </div>
    </div>




    <h1>YOU MIGHT ALSO LIKE</h1>
    <div className={classes.Slider_Container}>
      <div className={classes.arrowContainerL} onClick={ () => {props.NewActiveSlideProduct(props.ActivePageFromSurfApparel-1,'SurfApparel')}}>
        <div className={classes.arrowLC}></div>
      </div>
      <div className={classes.Slider}> 
        {props.SurfProduct.filter(el => el.id <= props.ActivePageFromSurfApparel * 3 && el.id > props.ActivePageFromSurfApparel * 3 - 3)
          .map(el => { return <Product img={el.img} Prise={el.Prise} Sale={el.Sale} text={el.text} key={el.id} id={el.id} urlPage={'SurfProduct'}/>})}
      </div>
      <div className={classes.arrowContainerR} onClick={ () => {props.NewActiveSlideProduct(props.ActivePageFromSurfApparel+1,'SurfApparel')}}>
        <div className={classes.arrowRC}></div>
      </div>
    </div>
    
    <h1>RECENTLY VIEWED</h1>
    <div className={classes.Slider_Container}>
      <div className={classes.arrowContainerLY} onClick={ () => {props.NewActiveSlideProduct(props.ActivePageSale-1,'Sale Products')}}>
        <div className={classes.arrowLC}></div>
      </div>
      <div className={classes.Slider}> 
        {props.SaleProducts.filter(el => el.id <= props.ActivePageSale * 3 && el.id > props.ActivePageSale * 3 - 3)
          .map(el => { return <Product img={el.img} Prise={el.Prise} Sale={el.Sale} text={el.text} key={el.id} id={el.id} urlPage={'SaleProducts'}/>})}
      </div>
      <div className={classes.arrowContainerRY} onClick={ () => {props.NewActiveSlideProduct(props.ActivePageSale+1,'Sale Products')}}>
        <div className={classes.arrowRC}></div>
      </div>
    </div>
  </section>
}



export default Cart
