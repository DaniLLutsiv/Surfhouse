import React from 'react'
import classes from './Articles.module.css'

const Articles = (props) =>{
	return <section className={classes.section}>
	 <h2>Articles Experts</h2>
	 <div className={classes.list}>
	 	<div>LG Spectrum review</div>
	 <div>Verizon Droid Xyboard 8.2 and 10.1 review</div>
	 <div>Mac mini review (mid 2011)</div>
	 <div>Wacom Inkling review</div>
	 <div>Sonos Play:3 review</div>
	 <div>HTC Radar 4G review</div>
	 <div>Canon PowerShot S100 </div>
	 <div>Apple iMac </div>
	 </div>
	 <div onClick={() => {alert('callback')} } className={classes.View}>view all &#8594;</div>
	</section>
}

export default Articles
