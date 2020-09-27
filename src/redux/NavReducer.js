let initialState = { 
	style:'hidden',
	Category:'',
	Brand:'',
	Language:'en'
}

const NavReducer = (state = initialState , action) => {

	switch(action.type){
		case 'NEW-STYLE' :
		return{
			...state,	
			style : 'auto'
		}
		case 'CHANGE-LANGUAGE' :
		return{
			...state,	
			Language : action.Language
		}
		case 'CHANGE-URL' :
		if (action.key === 'Category') {
			return{
				...state,	
				Category : action.value
			}
		}else if (action.key === 'Brand') {
			return{
				...state,	
				Brand : action.value
			}
		}else{
			return{
				...state,	
				Brand : '',
				Category:''
			}
		}
		

		default:
			return state;	
	} 	
}

export const NewStyle = () => {
	return {
		type:'NEW-STYLE'
	}
}

export const ChangeUrl = (key,value) => {
	return {
		type:'CHANGE-URL',
		key,
		value
	}
}
export const ChangeLanguage = (Language) => {
	return {
		type:'CHANGE-LANGUAGE',
		Language
	}
}



export default NavReducer;