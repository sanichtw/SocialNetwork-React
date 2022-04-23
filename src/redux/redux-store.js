import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navReducer from "./reducers/nav-reducer";
import findUsersReducer from "./reducers/findUsers-reducer";
import authReducer from "./reducers/auth-reducer";
import ThunkMiddleWare from "redux-thunk"
import { reducer as formReducer } from "redux-form";
import appReducer from "./reducers/app-reducer";


const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(ThunkMiddleWare)
));

export default store;