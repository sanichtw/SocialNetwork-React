import { SEND_NEW_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from "../types/types";

let initialState = {
    namesData:
        [
            { id: 1, name: 'Nikita', avatar: "https://clipart.world/wp-content/uploads/2020/10/Light-Green-Among-Us-clipart-transparent.png" },
            { id: 2, name: 'Egor', avatar: "https://i.kym-cdn.com/photos/images/original/002/018/144/1f8.png" },
            { id: 3, name: 'Dima', avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNywSRTED7qhaL7cwWVHKczIMFTWHzpxN0A&usqp=CAU" },
        ],
    msgsData: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'How your react?' },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            if (state.newMessageText) {
                let newPost = {
                    id: 5,
                    text: state.newMessageText,
                };
                return {
                    ...state,
                    msgsData: [...state.msgsData, newPost],
                    newMessageText: ''
                }
            };
        };
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            }
        }
        default: return state;
    }
}

export default dialogsReducer;
