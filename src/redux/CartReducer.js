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
		case 'ADD-PRODUCT-TO-CART' :
		action.product.Quantity = action.Quantity
		return{
			...state,	
			Product : [...state.Product, action.product ]
		}
		case 'DELETE-ELEM-FROM-CART':
		return{
			...state,
			Product: state.Product.filter((el,index) => index !== action.id)
		}
		case 'DELETE-CART':
		return{
			...state,
			Product: []
		}
		case 'CHANGE-QUANTITY' :
		if (action.num<1) {action.num = 1}
		return{
			...state,
			Product: state.Product.map((item,index) => {
		        if(index === action.index) {
		          return {
		            ...item,
		            Quantity: action.num,
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
		type:'ADD-PRODUCT-TO-CART',
		product,
		Quantity
	}
}
export const DeleteElemFromCart = (id) => {
	return {
		type:'DELETE-ELEM-FROM-CART',
		id
	}
}
export const QuantityChange = (num,index) =>{
	return {
		type:'CHANGE-QUANTITY',
		num,
		index
	}
}

export const DeleteCart = () => {
	return {
		type:'DELETE-CART'
	}
}




export default CartReducer;