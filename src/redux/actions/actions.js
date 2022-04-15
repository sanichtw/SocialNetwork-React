import { stopSubmit } from "redux-form";
import { authAPI, profileAPI, usersAPI } from "../../api/api";
import {
    ADD_POST, DELETE_IN_PROGRESS_BTN, SEND_NEW_MESSAGE,
    SET_CURRENT_PAGE, SET_IN_PROGRESS_BTN, SET_PROFILE, SET_TOTAL_USERS_COUNT,
    SET_USERS, SET_USER_AUTH, DELETE_USER_AUTH, TOGGLE_IS_FETCHING, TOGGLE_FOLLOW_SUCCESS, SET_STATUS, UPDATE_STATUS
} from "../types/types";
import { UPDATE_NEW_POST_TEXT, UPDATE_NEW_MESSAGE_TEXT } from "../types/types";

export const AddPostActionCreator = (text) => ({ type: ADD_POST, text });
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};
export const sendNewMessage = (text) => ({ type: SEND_NEW_MESSAGE, text });
export const updateNewMessage = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text,
    }
};

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

// Thunks:
export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching());
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching())
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setCurrentPage(currentPage))
        })
};

export const toggleFollow = (userId, followStatus) => (dispatch) => {
    dispatch(setInProgressBtn(userId));
    followStatus ?
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollowSuccess(userId));
                }
                dispatch(deleteInProgressBtn(userId));
            })
        :
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollowSuccess(userId));
                }
                dispatch(deleteInProgressBtn(userId))
            })

};

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setProfile(response.data));
        })
};
export const getProfileStatus = (userId) => (dispatch) => {
    profileAPI.getProfileStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));

        })
};
export const updateProfileStatus = (status) => (dispatch) => {
    profileAPI.updateProfileStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
};

export const getUserAuthData = () => (dispatch) => {
    authAPI.auth()
        .then(response => {
            let { id, login, email } = response;
            if (id && login && email) {
                dispatch(setUserAuthData(id, login, email, true));

            }
        })
};

export const logIn = (email, password, rememberMe = false) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getUserAuthData());
            } else {
                debugger
                let message = response.messages.length > 0 ? response.messages[0] : "Some error";
                dispatch(stopSubmit("Login", {_error: message }))

            }
        })
};

export const logOut = () => (dispatch) => {
    authAPI.logOut()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, false));
            }
        })
};