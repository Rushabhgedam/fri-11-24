import { createStore } from 'redux';
import { combineReducers } from 'redux';
import CounterReducer from '../reducers/Counter';

const store = createStore(CounterReducer);

export default store;
export type RootState = ReturnType<typeof CounterReducer>;






/**
 * 
import ShoppingCartReducer from '../reducers/ShoppingCart';



const AppReducer = combineReducers({
  counter: CounterReducer,
  cart : ShoppingCartReducer
});

 */