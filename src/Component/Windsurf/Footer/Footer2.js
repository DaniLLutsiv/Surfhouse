import React from 'react'
import classes from './Footer2.module.css'

const Footer = () =>{
	return <section className={classes.section}>
		<div className={classes.Bottom}>
			<div>2014  SURFHOUSE. All rights reserved - Designed by theuncreativelab.com</div>
			<div className={classes.img}>
				<img src={process.env.PUBLIC_URL + `/img/images/index_06.png`} alt=""/>
				<img src={process.env.PUBLIC_URL + `/img/images/index_08.png`} alt=""/>
				<img src={process.env.PUBLIC_URL + `/img/images/index_10.png`} alt=""/>
				<img src={process.env.PUBLIC_URL + `/img/images/index_12.png`} alt=""/>
				<img src={process.env.PUBLIC_URL + `/img/images/index_14.png`} alt=""/>	
		 	</div>
		</div>
	</section>
}

export default Footer