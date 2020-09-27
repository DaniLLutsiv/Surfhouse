import { createStore, combineReducers } from 'redux';
import NavReducer from './NavReducer';
import SlideReducer from './SlideReducer';
import ProductReducer from './ProductReducer';
import InstagramReducer from './InstagramReducer';
import CartReducer from './CartReducer';


let reducers = combineReducers({
	Nav: NavReducer,
	Slide: SlideReducer,
	Products:ProductReducer,
	Instagram: InstagramReducer,
	Cart: CartReducer
});

let store = createStore(reducers);

window.store = store;
export default store;