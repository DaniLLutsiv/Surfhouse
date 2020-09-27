import React from 'react'
import classes from './TagsWidget.module.css'

const TagsWidget = (props) =>{
	/* Для ссылки нужно текст и адркс 
	на сервере нужно будет читать урл и давть нужные данные

	*/
	const Tags = [{name:'Kitesurf'},{name:'Super'},{name:'Duper'},{name:'Theme'},{name:'Men'},{name:'Women'},
	{name:'Kids'},{name:'All'},{name:'Apparel'},{name:'Man'},{name:'Best'}] 
	return <section className={classes.section}>
		<h2>TagsWidget</h2>
		<div className={classes.Tags} style={{	overflow: `${props.style}`}}>
			{Tags.map(el => {return <span onClick={() => { /* кол бек который подгрузит нужные данные с сервера */ }} className={classes.Tag} key={el.name}><div>{el.name}</div></span>})}
		</div>
		<div onClick={() => {props.NewStyle()} } className={classes.View}>view all tags &#8594;</div>
	</section>
}

export default TagsWidget
