import { GET_CAPTCHA_URL_SUCCESS, SET_USER_AUTH } from "../types/types";

let initialState = {
    login: null,
    userId: null,
    email: null,
    isAuth: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default: return state;
    }

}

export default authReducer;