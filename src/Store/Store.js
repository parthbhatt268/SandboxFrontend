import { createStore } from "redux";
import { cartReducer } from "./Reducer/Reducer";

const store = createStore(cartReducer);

export default store;



// this code is used only when you want to use mapstate to props and map dispatch to props other wise use the above code for useSelector and usedispatch hooks for accessing reduc state
// // store.js
// import { createStore } from 'redux';
// import rootReducer from './Reducer/RootReducer';

// const store = createStore(rootReducer);
// export default store;
