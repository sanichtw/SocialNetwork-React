import { ADD_POST, SET_PROFILE, SET_STATUS } from "../types/types";

let initialState = {
    postsData: [
        { id: 1, text: 'Hi', likesCount: 1 },
        { id: 2, text: 'You are awesome!', likesCount: 222 },
    ],
    profile: null,
    profilePhoto: 'https://clipart.world/wp-content/uploads/2020/10/Light-Green-Among-Us-clipart-transparent.png',
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

        default: return state;
    }

}

export default profileReducer;
