import React from 'react'
import classes from './HeaderNewProduct.module.css'


const HeaderNewProduct = (props) =>{
	return <section className={classes.section}>
		<div className={classes.Text}>{props.text}</div>
		<div className={classes.Buttons}>
			<div className={classes.Button} onClick={ () => { props.NewActiveSlideProduct(props.activeSlide-1, props.text)}}>
				<div className={classes.arrow}>&#8249;</div>
			</div>
			<div className={classes.Button} onClick={ () => {props.NewActiveSlideProduct(props.activeSlide+1, props.text)}}>
				<div className={classes.arrow}>&#8250;</div>
			</div>
		</div>
	</section>
}

export default HeaderNewProduct