import React from 'react'
import classes from './Slide.module.css'
import {NewActiveSlide} from '../../../redux/SlideReducer'
import { connect } from 'react-redux'
import SlideSearch from './SlideComponent/SlideSearch'

const Slide = (props) =>{
	
	const SlideCreator = (num) => {
		if (props.activeSlide === num){ return <div className={classes.LineRed}  
			onClick={ () => {props.NewActiveSlide(num)}}></div>  }else{ 
			return <div className={classes.Line}  onClick={ () => {props.NewActiveSlide(num)}}></div>}
	}
	return <section className={classes.section}>
		<div className={classes.Left}>
			<SlideSearch/>
			<div className={classes.Banner}>
				<div className={classes.Banner_block}>
					<h2>welcome to surfhouse</h2>
					<div>The only online store you will ever need for all your windsurfing and kitesurfing and SUP needs</div>
				</div>
			</div>
		</div>
		<div className={classes.Slide_number}>
			{SlideCreator(0)}
			{SlideCreator(1)}
			{SlideCreator(2)}
		</div>
		<div className={classes.Right}> 
			<div className={classes.Slide}>
				<div className={classes.Text}>
					<h2>{props.SlideText[props.activeSlide]}</h2>
					<div>Super easy going freeride boards based on the X-Cite Ride shape concept with additional control and super easy jibing. </div>
				</div>
				<div className={classes.Buttons}>
					<div className={classes.Button} onClick={ () => {props.NewActiveSlide(props.activeSlide-1)}}>
						<div className={classes.arrow}>&#8249;</div>
					</div>
					<div className={classes.ButtonR} onClick={ () => {props.NewActiveSlide(props.activeSlide+1)}}>
						<div className={classes.arrow}>&#8250;</div>
					</div>
				</div>
			</div>
			<div className={classes.Buy}><div  className={classes.BuyText}>BUY NOW</div></div>
		</div>
	</section>
}

const mapStateToProps = (state) => {
    return{
        activeSlide:state.Slide.activeSlide,
        SlideText:state.Slide.SlideText
    }
}


export default connect(mapStateToProps,{NewActiveSlide})(Slide)