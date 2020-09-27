import React from 'react'
import classes from './Header.module.css'
import {ChangeLanguage} from '../../../redux/NavReducer'
import { connect } from 'react-redux'


const Header = (props) =>{
	return <section className={classes.section}>
		<div className={classes.Left}>
            <div className={classes.logo}><img src={process.env.PUBLIC_URL + '/img/images/index_03.jpg'} alt=""/></div>
			<div>SURFHOUSE</div>
		</div>
		<div className={classes.Right}>
		 	<div className={classes.img}>
				<img src={process.env.PUBLIC_URL + `/img/images/index_06.png`} alt=""/>
				<img src={process.env.PUBLIC_URL + `/img/images/index_08.png`} alt=""/>
				<img src={process.env.PUBLIC_URL + `/img/images/index_10.png`} alt=""/>
				<img src={process.env.PUBLIC_URL + `/img/images/index_12.png`} alt=""/>
				<img src={process.env.PUBLIC_URL + `/img/images/index_14.png`} alt=""/>	
				{props.Language === 'en'? <div onClick={() => {props.ChangeLanguage('UA')}}>EN &#9660;</div>:
					<div onClick={() => {props.ChangeLanguage('en')}}>UA &#9660;</div>
				}
		 	</div>
		</div>
	</section>
}

const mapStateToProps = (state) => {
    return{
      Language:state.Nav.Language   
    }
}


export default connect(mapStateToProps,{ChangeLanguage})(Header)