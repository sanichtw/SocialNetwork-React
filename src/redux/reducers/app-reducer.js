import { SET_INITIALIZED } from "../types/types";

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default: return state;
    }

}

export default appReducer;