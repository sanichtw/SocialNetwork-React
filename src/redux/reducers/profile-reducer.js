import { ADD_POST, DELETE_POST, SET_PROFILE, SET_STATUS, SAVE_PHOTO_SUCCESS } from "../types/types";

let initialState = {
    postsData: [
        { id: 1, text: 'Hi', likesCount: 1 },
        { id: 2, text: 'You are awesome!', likesCount: 222 },
    ],
    profile: null,
    profileStatus: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (action.text) {
                let newPost = {
                    id: 5,
                    text: action.text,
                    likesCount: 0
                };
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                }
            }
        };
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id != action.postId)
            }
        }

        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                profileStatus: action.status
            }
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        default: return state;
    }

}

export default profileReducer;
