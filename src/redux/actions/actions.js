import { ADD_POST, FOLLOW, SEND_NEW_MESSAGE, SET_USERS, UNFOLLOW } from "../types/types";
import { UPDATE_NEW_POST_TEXT, UPDATE_NEW_MESSAGE_TEXT } from "../types/types";

export const AddPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export const sendNewMessageActionCreator = () => ({ type: SEND_NEW_MESSAGE })

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text,
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users })