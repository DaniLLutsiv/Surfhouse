import React from 'react'
import classes from '../Surfapparel.module.css'

const SurfApparelHeaderSetting = (props) =>{
	return <div className={classes.Setting}>
	          		<div className={classes.Flex}>
	          			<div className={classes.MR}>Sort by</div>
	          			<select className={classes.MR}> 
						  <option>Position</option>
						  <option>Prise</option>
						</select>	
						<div className={classes.MR}>&uarr;</div>
					</div>	

					<div className={classes.Flex}>
	          			<div className={classes.MR}>Viev As:</div>
						<div className={classes.MR}>
							<div className={classes.Flex}>
								<div className={classes.Cursor}>
			          				<div>
			          					<div className={classes.Square}></div>
			          					<div className={classes.Square}></div>
			          				</div>
			          				<div>
			          					<div className={classes.Square}></div>
			          					<div className={classes.Square}></div>
			          				</div>		
			          			</div>	
							</div>	          				
	          			</div>
	          			<div className={classes.Flex}>
	          				<div className={classes.Cursor}>
		          				<div>
		          					<div className={classes.Sq}></div>
		          					<div className={classes.Sq}></div>
		          					<div className={classes.Sq}></div>
		          				</div>
		          				<div>
		          					<div className={classes.Rectangle}></div>
		          					<div className={classes.Rectangle}></div>
		          					<div className={classes.Rectangle}></div>
		          				</div>
		          			</div>
	          			</div>
	          			
					</div>
          			
          			<div className={classes.Flex}>
	          			<div className={classes.MR}>SHOW</div>
	          			<select className={classes.MR} onChange={props.handleChange}> 
						  <option value="9">9</option>
						  <option value="12">12</option>
						  <option value="15">15</option>
						</select>	
						<div className={classes.MR}>Per page</div>
					</div>
          			<div className={classes.Flex}>
			 			<div className={classes.MR}>
			 				<div className={classes.Flex}>
				 				<div className={classes.MR}>PAGE:</div>
				 				{ props.ActivePage > 1 ? <div className={classes.Page} onClick={ () => {props.NewActiveSlideProduct(props.ActivePage-1, 'SurfApparel')}}>{props.ActivePage-1}</div>:''}
				 				<div className={classes.ActivePage}>{props.ActivePage}</div>
				 				<div className={classes.Page} onClick={ () => {props.NewActiveSlideProduct(props.ActivePage+1, 'SurfApparel')}}>{props.ActivePage+1}</div>
				 				<div className={classes.Button} onClick={ () => {props.NewActiveSlideProduct(props.ActivePage+1, 'SurfApparel')}}>
									<div className={classes.arrow}>&#8250;</div>
								</div>
				 			</div>
			 			</div>
          			</div>
          		</div>
}

export default SurfApparelHeaderSetting