import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navReducer from "./reducers/nav-reducer";
import findUsersReducer from "./reducers/findUsers-reducer";


const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer,
    findUsersPage: findUsersReducer
})

let store = createStore(rootReducers);
window.store = store;

export default store;