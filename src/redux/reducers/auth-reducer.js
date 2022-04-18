import { SET_INITIALIZED, SET_USER_AUTH } from "../types/types";

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
            }
        }
        default: return state;
    }

}

export default authReducer;