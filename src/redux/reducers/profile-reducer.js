import { ADD_POST, SET_PROFILE, UPDATE_NEW_POST_TEXT } from "../types/types";

let initialState = {
    postsData: [
        { id: 1, text: 'Hi', likesCount: 1 },
        { id: 2, text: 'You are awesome!', likesCount: 222 },
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText) {
                let newPost = {
                    id: 5,
                    text: state.newPostText,
                    likesCount: 0
                };
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                }
            }
        };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default: return state;
    }

}

export default profileReducer;
