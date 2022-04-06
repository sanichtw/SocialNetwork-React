import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navReducer from "./reducers/nav-reducer";
import findUsersReducer from "./reducers/findUsers-reducer";
import authReducer from "./reducers/auth-reducer";
import ThunkMiddleWare from "redux-thunk"


const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer
})

let store = createStore(rootReducers, applyMiddleware(ThunkMiddleWare));
window.store = store;

export default store;