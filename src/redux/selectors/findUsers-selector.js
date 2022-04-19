import { createSelector } from "reselect";

const getUsersSelector = (state) => {
    return state.findUsersPage.users
};

export const getUsers = createSelector(getUsersSelector, (users) => {
        return users.filter(u => true)
    });

export const getCurrentPage = (state) => {
    return state.findUsersPage.currentPage
};

export const getPageSize = (state) => {
    return state.findUsersPage.pageSize
};

export const getTotalUsersCount = (state) => {
    return state.findUsersPage.totalUsersCount
};

export const getIsFetching = (state) => {
    return state.findUsersPage.isFetching
};

export const getInProgressBtns = (state) => {
    return state.findUsersPage.inProgressBtns
};
