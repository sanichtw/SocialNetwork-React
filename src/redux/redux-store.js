import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navReducer from "./reducers/nav-reducer";


const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    navPage: navReducer
})

let store = createStore(rootReducers);

export default store;