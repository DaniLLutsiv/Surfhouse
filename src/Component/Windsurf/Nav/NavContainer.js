import React from 'react'
import classes from './NavContainer.module.css'
import Nav from './Nav/Nav';
import Banner from './Banner/Banner';
import TagsWidget from './TagsWidget/TagsWidget';
import Articles from './Articles/Articles';
import { connect } from 'react-redux';
import {NewStyle} from '../../../redux/NavReducer'


const NavContainer = (props) =>{
	return <section className={classes.Container}>
		<div>
			<Nav/>
		</div>
		<div className={classes.Banner}>
			<Banner url={`https://i.pinimg.com/280x280_RS/f0/ec/43/f0ec4348d1ccbff9cdddc1d9f4fb8c01.jpg`}/>
		</div>
		<div className={classes.TagsWidget}>
			<TagsWidget style={props.Style} NewStyle={props.NewStyle}/>
		</div>
		<div className={classes.Articles }>
			<Articles/>
		</div>
		
	</section>
}
const mapStateToProps = (state) => {
    return{
        Style:state.Nav.style
    }
}

export default connect(mapStateToProps,{NewStyle})(NavContainer)
