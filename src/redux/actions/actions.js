import { stopSubmit } from "redux-form";
import { authAPI, profileAPI, usersAPI } from "../../api/api";
import {
    ADD_POST, DELETE_IN_PROGRESS_BTN, SEND_NEW_MESSAGE, SET_CURRENT_PAGE,
    SET_IN_PROGRESS_BTN, SET_PROFILE, SET_TOTAL_USERS_COUNT, SET_USERS,
    SET_USER_AUTH, TOGGLE_IS_FETCHING, TOGGLE_FOLLOW_SUCCESS, SET_STATUS,
    SET_INITIALIZED, DELETE_POST, UPDATE_NEW_POST_TEXT, UPDATE_NEW_MESSAGE_TEXT, 
    SAVE_PHOTO_SUCCESS
} from "../types/types";

export const AddPostActionCreator = (text) => ({ type: ADD_POST, text });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const sendNewMessage = (text) => ({ type: SEND_NEW_MESSAGE, text });
export const updateNewMessage = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });
export const toggleFollowSuccess = (userId) => ({ type: TOGGLE_FOLLOW_SUCCESS, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const toggleIsFetching = () => ({ type: TOGGLE_IS_FETCHING });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setUserAuthData = (userId, login, email, isAuth) => ({ type: SET_USER_AUTH, payload: { userId, login, email, isAuth } });
export const setInProgressBtn = (userId) => ({ type: SET_IN_PROGRESS_BTN, userId });
export const deleteInProgressBtn = (userId) => ({ type: DELETE_IN_PROGRESS_BTN, userId });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const initializeSuccess = () => ({ type: SET_INITIALIZED });
export const savePhotoSucces = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

// Thunks:
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching());
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching());
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(currentPage));
};

export const toggleFollow = (userId, followStatus) => async (dispatch) => {
    dispatch(setInProgressBtn(userId));
    let response;
    if (followStatus) {
        response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(toggleFollowSuccess(userId));
        }
        dispatch(deleteInProgressBtn(userId));
    } else {
        response = await usersAPI.follow(userId);
        if (response.data.resultCode === 0) {
            dispatch(toggleFollowSuccess(userId));
        }
        dispatch(deleteInProgressBtn(userId))
    }
};

export const getProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response.data));
};

export const getProfileStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfileStatus(userId)
    dispatch(setStatus(response.data));
};

export const updateProfileStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateProfileStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const getUserAuthData = () => async (dispatch) => {
    const response = await authAPI.auth()
    let { id, login, email } = response;
    if (id && login && email) {
        dispatch(setUserAuthData(id, login, email, true))
    }
};

export const logIn = (email, password, rememberMe = false) => async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getUserAuthData());
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("Login", { _error: message }))
    }
};

export const logOut = () => async (dispatch) => {
    const response = await authAPI.logOut()
    if (response.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false));
    }
};

export const initializeApp = () => (dispatch) => {
    dispatch(getUserAuthData())
        .then(() => {
            dispatch(initializeSuccess())
        })
};

export const setMainPhoto = (photos) => async (dispatch) => { 
    const response = await profileAPI.updateMainPhoto(photos);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSucces(response.data.data.photos));
    }
};