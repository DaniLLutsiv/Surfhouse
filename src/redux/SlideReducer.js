let initialState = { 
	activeSlide:0,
	SlideText:['FT FUNRIDE 2077','98 YEARS AGO','LOREM INPUS']
}

const NavReducer = (state = initialState , action) => {

	switch(action.type){
		case 'NEW-ACTIVE-SLIDE' :
		if (action.activeSlide === 3) {action.activeSlide = 0}
		if (action.activeSlide === -1) {action.activeSlide = 2}
		return{
			...state,	
			activeSlide: action.activeSlide
		}

		default:
			return state;	
	} 	
}

export const NewActiveSlide = (activeSlide) => {
	return {
		type:'NEW-ACTIVE-SLIDE',
		activeSlide
	}
}



export default NavReducer;