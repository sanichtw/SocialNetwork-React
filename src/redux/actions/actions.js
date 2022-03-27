import { ADD_POST, FOLLOW, SEND_NEW_MESSAGE, SET_CURRENT_PAGE, SET_PROFILE, SET_TOTAL_USERS_COUNT, SET_USERS, TOGGLE_IS_FETCHING, UNFOLLOW } from "../types/types";
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

export const toggleFollow = (userId) => ({ type: FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const toggleIsFetching = () => ({ type: TOGGLE_IS_FETCHING});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});