import React from 'react'
import classes from './Product.module.css'
import {NavLink} from "react-router-dom";
import {DelateParams} from '../../../../redux/ProductReducer'
import { connect } from 'react-redux'




const Product = (props) =>{
	return <NavLink className={classes.section} to={`/CurrentElement/${props.urlPage}/${props.id}`} onClick={() => {props.DelateParams()}}>
		<div className={classes.Image}>
			{props.Sale ? <div className={classes.cornerY}>
				<div>HOT</div>
			</div> : <div className={classes.corner}>
				<div>NEW</div>
			</div>}
			
			<img src={props.img} alt=""/>
		</div>
		<div className={classes.Texts}>
			<div className={classes.Text}>{props.text}</div>
			<div>
				<div className={classes.Prise}>€.{props.Prise}</div>
				{props.Sale ? <div className={classes.Sale}>{props.Sale}</div>:''}
				
			</div>
		</div>
	</NavLink>
}
const mapStateToProps = (state) =>{
	return {}
}

export default connect(mapStateToProps,{DelateParams})(Product)