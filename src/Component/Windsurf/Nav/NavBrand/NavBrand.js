import React from 'react'
import classes from '../Nav/Nav.module.css'
import { connect } from 'react-redux'
import {ChangeUrl} from '../../../../redux/NavReducer'


const NavBrand = (props) =>{

	return <section className={classes.section}>
		<div className={classes.Menu}><div className={classes.Menu_text}>brand options</div></div>
		<nav className={classes.block}>
			<div className={classes.Link} 
			onClick={() => {props.ChangeUrl('Brand','billabong')}}> <div className={classes.divfirst}>billabong</div></div>
	        <div className={classes.Link} 
	        onClick={() => {props.ChangeUrl('Brand','element')}}> <div className={classes.div}>element</div></div>
	        <div className={classes.Link} 
	        onClick={() => {props.ChangeUrl('Brand','o’neill')}}> <div className={classes.div}>o’neill</div></div>
	        <div className={classes.Link} 
	        onClick={() => {props.ChangeUrl('Brand','oakley')}}> <div className={classes.div}>oakley</div></div>
	        <div className={classes.Link} 
	        onClick={() => {props.ChangeUrl('Brand','reef')}}> <div className={classes.div}>reef</div></div>
	        <div className={classes.Link} 
	        onClick={() => {props.ChangeUrl('Brand','quiksilver')}}> <div className={classes.divfirst}>quiksilver</div></div>
	        <div className={classes.Link} 
	        onClick={() => {props.ChangeUrl('Brand','ripcurl')}}> <div className={classes.div}>ripcurl</div></div>
	        <div className={classes.Link} 
	        onClick={() => {props.ChangeUrl('Brand','jackss')}}> <div className={classes.divend}>jackss</div></div>
        </nav>
	</section>

}
const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps,{ChangeUrl})(NavBrand)
