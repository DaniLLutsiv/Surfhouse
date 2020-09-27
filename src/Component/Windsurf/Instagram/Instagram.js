import React from 'react'
import classes from './Instagram.module.css'
import { connect } from 'react-redux'



const Instagram = (props) =>{
	return <section className={classes.section}>
		<div className={classes.Top}>
			<img src={process.env.PUBLIC_URL + `/img/images/index_37.jpg`} alt=""/>
			<div>Instagram feed:</div> 
			<h1>#surfhouse</h1>
		</div>
		<div className={classes.Center}>
			{props.img.map( el => { return <div className={classes.img} key={el.key}><img src={el.img} alt=""/></div>})}
		</div>
		<div className={classes.Bottom}>
			{props.Messegers.map( el => { return <img src={el} alt="" key={el}/>})}
		</div>
	</section>
}


const mapStateToProps = (state) => {
    return{
    	img:state.Instagram.img,
    	Messegers:state.Instagram.Messegers
    }
}

export default connect(mapStateToProps,{})(Instagram)