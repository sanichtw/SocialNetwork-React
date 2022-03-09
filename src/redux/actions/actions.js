import { ADD_POST, SEND_NEW_MESSAGE } from "../types/types";
import { UPDATE_NEW_POST_TEXT, UPDATE_NEW_MESSAGE_TEXT } from "../types/types";

export const AddPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export const sendNewMessageActionCreator = () => {
    return {
        type: SEND_NEW_MESSAGE
    }
};

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text,
    }
};