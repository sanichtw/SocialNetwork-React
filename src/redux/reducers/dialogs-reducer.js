import { SEND_NEW_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from "../types/types";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            if (state.newMessageText) {
                let newPost = {
                    id: 5,
                    text: state.newMessageText,
                    likesCount: 0
                };
                state.msgsData.push(newPost);
                state.newMessageText = '';
                return state;
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default: return state;
    }
}

export default dialogsReducer;
