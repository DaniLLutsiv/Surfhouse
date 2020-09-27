import React from 'react'
import classes from '../Nav/Nav.module.css'
import { connect } from 'react-redux'
import {ChangeUrl} from '../../../../redux/NavReducer'


const NavCategory = (props) =>{
	// use Navlilk for activeClassName and in future new functional
	return <section className={classes.section}>
		<div className={classes.Menu}><div className={classes.Menu_text}>category options</div></div>
		<nav className={classes.block}>
	        <div className={classes.Link} 
	        	onClick={() => {props.ChangeUrl('Category','men')}}> <div className={classes.divfirst}>men</div></div>
	        <div className={classes.Link} 
	        	onClick={() => {props.ChangeUrl('Category','women')}}> <div className={classes.div}>women</div></div>
	        <div className={classes.Link} 
	        	onClick={() => {props.ChangeUrl('Category','kids')}}> <div className={classes.div}>kids</div></div>
	        <div className={classes.Link} 
	        	onClick={() => {props.ChangeUrl('Category','wetsuits')}}> <div className={classes.div}>wetsuits</div></div>
	        <div className={classes.Link} 
	        	onClick={() => {props.ChangeUrl('Category','outerwear')}}> <div className={classes.divend}>outerwear</div></div>
        </nav>
	</section>

}
const mapStateToProps = (state) => {
    return{
    	SurfProduct:state.Products.SurfProduct
    }
}

export default connect(mapStateToProps,{ChangeUrl})(NavCategory)
