import { SET_USER_AUTH } from "../types/types";

let initialState = {
    login: null,
    userId: null,
    email: null,
    isAuth: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH: {
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth
            }
        }
        default: return state;
    }

}

export default authReducer;