let initialState = { 
	img:[{key:0,img:'https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg'},
	{key:1,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxYemmTO9egxdCwvuKQpKd03kZvLfE8b2fWGpzNYZ3RthVT_QvV5VxW0bFYoGZRVn5P6euePMxlI63xIImweC0BiSTVGJVLu27pA&usqp=CAU&ec=45695924'},
	{key:2,img:'https://www.imgonline.com.ua/examples/red-yellow-flower.jpg'},
	{key:3,img:'https://i.pinimg.com/originals/23/53/6e/23536e5d6fd64cb25644a98622e21d9b.jpg'},
	{key:4,img:'https://i.pinimg.com/236x/4c/bd/cf/4cbdcf9d6a180e8bce2aa5e2ceb67a07--surf-house-villa.jpg'},
	{key:5,img:'https://i.pinimg.com/originals/8c/e5/3d/8ce53da2ef8726926f0063039bf31c3f.jpg'}
	],
	Messegers:['https://www.activetraffic.ru/upload/medialibrary/0e9/0e9cff786429fd7fc2bd14ae6df6ab04.png',
	'https://3dnews.ru/assets/external/illustrations/2017/11/10/961377/new-youtube-logo-840x402.jpg',
	'https://mixdamel.com.br/wp-content/uploads/2015/04/logo-pinterest-vermelho-e1542747249318.jpg']
}

const InstagramReducer = (state = initialState , action) => {

	switch(action.type){
		case 'NEW-STYLE' :
		return{
			...state,	
			style : 'auto'
		}

		default:
			return state;	
	} 	
}

export default InstagramReducer;