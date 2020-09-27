import React from 'react'
import {NavLink} from "react-router-dom"
import classes from './Banner.module.css'



const Banner = (props) =>{
	return <section className={classes.section}>
		<NavLink to="/url">
			<img src={props.url} alt=""/>
			<div className={classes.text}>
				<div>NOW</div>
				<div>IS</div>
				<div>OPEN!</div>  
			</div>
		</NavLink>
	</section>

}

export default Banner
