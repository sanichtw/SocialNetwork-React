import {
    DELETE_IN_PROGRESS_BTN, TOGGLE_FOLLOW_SUCCESS, SET_CURRENT_PAGE, SET_IN_PROGRESS_BTN,
    SET_TOTAL_USERS_COUNT, SET_USERS, TOGGLE_IS_FETCHING
} from "../types/types";

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 10,
    isFetching: false,
    inProgressBtns: []
}

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed }
                    }
                    return user
                }
                )
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        case SET_IN_PROGRESS_BTN:
            return {
                ...state,
                inProgressBtns: [...state.inProgressBtns, action.userId]
            }
        case DELETE_IN_PROGRESS_BTN:
            return {
                ...state,
                inProgressBtns: [...state.inProgressBtns.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
};

export default findUsersReducer