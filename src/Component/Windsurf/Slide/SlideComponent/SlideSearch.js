import React from 'react'
import classes from '../Slide.module.css'
import { connect } from 'react-redux'
import {NavLink} from "react-router-dom"
import {DeleteCart} from '../../../../redux/CartReducer'



const SlideSearch = (props) =>{
	let Prise = 0;
	for (let i = 0; i < props.cart_product.length; i++) {
	    Prise+= Number(props.cart_product[i].Prise)*props.cart_product[i].Quantity
	  }
	return <section >
		<div className={classes.Search}>
				<div className={classes.Log}>
					<div>LOG IN</div><div>WISH LIST (o)</div>
				</div>

				<div className={classes.Cart}>
					<div className={classes.Edit}>
						<div><img src={process.env.PUBLIC_URL + `/img/images/index_29.jpg`} alt=""/></div>
						<div className={classes.Prise}>
							<div>€.{Prise}</div>
							<div className={classes.Prise_text}>{props.cart_product.length} items</div>
						</div>
						<div className={classes.X}>
							<img className={classes.img_search} src={process.env.PUBLIC_URL + `/img/images/index_1.jpg`} alt="X"
							onClick={() => props.DeleteCart()}/>
							<div>
								<NavLink to="/Cart">EDIT</NavLink>
							</div>
						</div>
					</div>
					<div className={classes.view}>
						<NavLink to="/Cart">view cart</NavLink>
						<NavLink to="/Cart">Checkout</NavLink>
					</div>
				</div>

				<div className={classes.search}>
					<div className={classes.search_block}>
						<div>SEARCH</div>
						<div><img src={process.env.PUBLIC_URL + '/img/images/index_2.jpg'} alt="X"/></div>
					</div>
					<div className={classes.search_img}>
						<img src={process.env.PUBLIC_URL + '/img/images/index_33.jpg'} alt="P"/>
					</div>
				</div>
			</div>
	</section>
}


const mapStateToProps = (state) => {
    return{
      cart_product:state.Cart.Product      
    }
}

export default connect(mapStateToProps,{DeleteCart})(SlideSearch)