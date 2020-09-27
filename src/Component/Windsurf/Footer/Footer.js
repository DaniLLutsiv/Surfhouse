import React from 'react'
import classes from './Footer.module.css'

const Footer = () =>{
	return <section className={classes.section}>
		<div className={classes.Top}>
			<div className={classes.Elem}>
				<h2>Category</h2>
				<div>Home</div>
				<div>about us</div>
				<div>eshop</div>
				<div>Features</div>
				<div>new collections</div>
				<div>blog</div>
				<div>contact</div>
			</div>
			<div className={classes.Elem}>
				<h2>Our Account</h2>
				<div>Your Account</div>
				<div>Personal information</div>
				<div>Addresses</div>
				<div>Discount</div>
				<div>Orders history</div>
				<div>Addresses</div>
				<div>Search Terms</div>
			</div>
			<div className={classes.Elem}>
				<h2>Our Support</h2>
				<div>Site Map</div>
				<div>Search Terms</div>
				<div>Advanced Search</div>
				<div>Mobile</div>
				<div>Contact Us</div>
				<div>Mobile</div>
				<div>Addresses</div>	
			</div>
			<div className={classes.SuperElem}>
				<h2>Newsletter</h2>
				<div className={classes.SE_txt}>Join thousands of other people subscribe to our news</div>
				<div className={classes.Search}>
					<div className={classes.Left}>
						<div>INSERT EMAIL</div>
					</div>
					<div className={classes.Right}>
						<div>SUBMIT</div>
					</div>
				</div>

			</div>
			<div className={classes.SuperElem}>
				<h2>About Us</h2>
				<div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </div>
				<div className={classes.txt}>Phone: 1-999-342-9876</div>
				<div className={classes.txt}>
					e-mail:<div>&nbsp;info@surfhouse.com</div>
				</div>
			</div>
		</div>
	</section>
}

export default Footer