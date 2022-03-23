import { FOLLOW, SET_USERS, UNFOLLOW } from "../types/types";

let initialState = {
    users: [
        { id: 1, isFollow: false, fullName: 'Nikita', status: 'Learning React', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, isFollow: false, fullName: 'Egor', status: 'Learning Java', location: { city: 'Krakow', country: 'Poland' } },
        { id: 3, isFollow: false, fullName: 'Dmitriy', status: 'Learning DevOps', location: { city: 'Minsk', country: 'Belarus' } },
    ]
}

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, isFollow: !user.isFollow }
                    }
                    return user
                }
                )
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
};

export default findUsersReducer