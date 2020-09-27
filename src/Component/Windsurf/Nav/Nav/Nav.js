import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './Nav.module.css'


const Nav = () =>{

	return <section className={classes.section}>
		<div className={classes.Menu}><div className={classes.Menu_text}>Menu</div></div>
		<nav className={classes.block}>
	        <div to="/about" className={classes.Link}> <div className={classes.divfirst}>About</div></div>
	        <NavLink to="/Cart" activeClassName={classes.activeLink} className={classes.Link}> <div className={classes.div}>Cart</div></NavLink>
	        <NavLink to="/surfapparel" activeClassName={classes.activeLink} className={classes.Link}> <div className={classes.div}>Surf Apparel</div></NavLink>
	        <NavLink to="/windsurf" activeClassName={classes.activeLink} className={classes.Link}> <div className={classes.div}>Windsurf</div></NavLink>
	        <div to="/accessries" className={classes.Link}> <div className={classes.div}>Accessries</div></div>
	        <div to="/sale" className={classes.Link}> <div className={classes.div}>Sale</div></div>
	        <div to="/brands" className={classes.Link}> <div className={classes.div}>Brands</div></div>
	        <div to="/blog" className={classes.Link}> <div className={classes.div}>Blog</div></div>
	        <div to="/gatgets" className={classes.Link}> <div className={classes.div}>Gatgets</div></div>
	        <NavLink to="/Contact" activeClassName={classes.activeLink} className={classes.Link}> <div className={classes.divend}>Contact</div></NavLink>
        </nav>
	</section>

}

export default Nav
