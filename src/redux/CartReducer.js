const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
DELETE_ELEM_FROM_CART = 'DELETE_ELEM_FROM_CART',
CHANGE_QUANTITY = 'CHANGE_QUANTITY',
DELETE_CART = 'DELETE_CART'

let initialState = { 
	Product:[{img:`https://img.klubok.com/img/used/2020/04/22/25318/25318676_2.jpg`,text:'Surf Apparel',Quantity:1,Prise:'36.55',Sale:'',id:1, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:32,Length:[32,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,0,0,0],Tags:['Men,Duper'] },
	{img:`https://monplatin.md/upload/products/201zrhit2u.png`, text:'Single Thruster 2014',Quantity:1,Prise:'865.00',Sale:'',id:2, 
		QuickOverview:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type.`,
		Availability:'In stock',Size:29,Length:[30,34], Small_img:[`https://for-male.ru/wp-content/uploads/2013/10/shampun-clear-vita-abe-men-aktivsport-2-v-1.jpg`,`https://cf-product.clouty.ru/link_aHR0cHM6Ly9hLmxtY2RuLnJ1L3BpL2ltZzYwMHg4NjYvVC9JL1RJMDE0TE1aS0cwMl81ODQyMTEwXzFfdjMuanBn`],Star:[1,1,0,0,0] }]
}

const CartReducer = (state = initialState , action) => {

	switch(action.type){
		case ADD_PRODUCT_TO_CART :
		action.product.Quantity = action.Quantity
		return{
			...state,	
			Product : [...state.Product, action.product ]
		}
		case DELETE_ELEM_FROM_CART:
		return{
			...state,
			Product: state.Product.filter((el,index) => index !== action.id)
		}
		case DELETE_CART:
		return{
			...state,
			Product: []
		}
		case CHANGE_QUANTITY :
		let num;
		if (action.num < 1) {num = 1}else{ num = action.num}
		return{
			...state,
			Product: state.Product.map((item,index) => {
		        if(index === action.index) {
		          return {
		            ...item,
		            Quantity: num
		          }
		        }
		        return item;
		      })	
		}

		default:
			return state;	
	} 	
}

export const AddProductToCart = (product,Quantity) => {
	return {
		type: ADD_PRODUCT_TO_CART,
		product,
		Quantity
	}
}
export const DeleteElemFromCart = (id) => {
	return {
		type: DELETE_ELEM_FROM_CART,
		id
	}
}
export const QuantityChange = (num,index) =>{
	return {
		type: CHANGE_QUANTITY,
		num,
		index
	}
}

export const DeleteCart = () => {
	return {
		type: DELETE_CART
	}
}




export default CartReducer;