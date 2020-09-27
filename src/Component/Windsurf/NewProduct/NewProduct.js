import React from 'react'
import classes from './NewProduct.module.css'
import { connect } from 'react-redux'
import HeaderNewProduct from './HeaderNewProduct/HeaderNewProduct'
import Product from './Product/Product'
import {NewActiveSlideProduct} from '../../../redux/ProductReducer'

const NewProduct = (props) =>{
	/*<div className={"some-" + "class"} />*/
	return <section className={classes.section}>
		<HeaderNewProduct text="New Products" NewActiveSlideProduct={props.NewActiveSlideProduct} activeSlide={props.ActivePageNewProducts}/>
		<div className={classes.Overflow}>
			<div className={classes.slideUp}>	
				{props.NewProducts.filter(el => el.id <= props.ActivePageNewProducts * props.LengthNewProduct && el.id > props.ActivePageNewProducts * props.LengthNewProduct - props.LengthNewProduct)
					.map(el => { return <Product img={el.img} Prise={el.Prise} 
						Sale={el.Sale} text={el.text} key={el.id} id={el.id} urlPage={'NewProducts'}/> })}
			</div>			
		</div>

		<HeaderNewProduct text="Top Products" NewActiveSlideProduct={props.NewActiveSlideProduct} activeSlide={props.ActivePageTopProducts}/>
		<div className={classes.Overflow}>
			<div className={classes.slideUp}>
				{props.TopProducts.filter(el => el.id <= props.ActivePageTopProducts * props.LengthElseProduct && el.id > props.ActivePageTopProducts * props.LengthElseProduct - props.LengthElseProduct)
					.map(el => { return <Product img={el.img} Prise={el.Prise} 
						Sale={el.Sale} text={el.text} key={el.id} id={el.id} urlPage={'TopProducts'}/>})}
			</div>
		</div>

		<HeaderNewProduct text="Sale Products" NewActiveSlideProduct={props.NewActiveSlideProduct} activeSlide={props.ActivePageSaleProducts}/>
		<div className={classes.Overflow}>
			<div className={classes.slideUp}>
				{props.SaleProducts.filter(el => el.id <= props.ActivePageSaleProducts * props.LengthElseProduct && el.id > props.ActivePageSaleProducts * props.LengthElseProduct - props.LengthElseProduct)
					.map(el => { return <Product img={el.img} Prise={el.Prise} 
						Sale={el.Sale} text={el.text} key={el.id} id={el.id} urlPage={'SaleProducts'}/>})}
			</div>
		</div>
	</section>
}

const mapStateToProps = (state) => {
    return{
    	LengthNewProduct:state.Products.LengthNewProduct,
    	ActivePageNewProducts:state.Products.ActivePageNewProducts,
    	NewProducts:state.Products.NewProducts,
    	TopProducts:state.Products.TopProducts,
    	SaleProducts:state.Products.SaleProducts,
        LengthElseProduct:state.Products.LengthElseProduct,
        ActivePageTopProducts:state.Products.ActivePageTopProducts,
        ActivePageSaleProducts:state.Products.ActivePageSaleProducts
    }
}


export default connect(mapStateToProps,{NewActiveSlideProduct})(NewProduct)