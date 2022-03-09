import navReducer from "./reducers/nav-reducer";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer"
import { ADD_POST, SEND_NEW_MESSAGE, UPDATE_NEW_MESSAGE_TEXT, UPDATE_NEW_POST_TEXT } from "./types/types";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, text: 'Hi', likesCount: 1 },
                { id: 2, text: 'You are awesome!', likesCount: 222 },
            ],
            newPostText: ''
        },
        dialogPage: {
            namesData:
                [
                    { id: 1, name: 'Nikita', avatar: "https://clipart.world/wp-content/uploads/2020/10/Light-Green-Among-Us-clipart-transparent.png" },
                    { id: 2, name: 'Egor', avatar: "https://i.kym-cdn.com/photos/images/original/002/018/144/1f8.png" },
                    { id: 3, name: 'Dima', avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNywSRTED7qhaL7cwWVHKczIMFTWHzpxN0A&usqp=CAU" },
                ],
            msgsData: [
                { text: 'Hi' },
                { text: 'How are you?' },
                { text: 'How your react?' },
            ],
            newMessageText: ''

        },
        navPage: {
            friendsData: [
                { id: 1, name: 'Egor', avatar: "https://cdn-icons-png.flaticon.com/512/147/147140.png" },
                { id: 2, name: 'Dima', avatar: "https://cdn-icons-png.flaticon.com/512/147/147140.png" },
                { id: 3, name: 'Dasha', avatar: "https://cdn-icons-png.flaticon.com/512/147/147140.png" },
                { id: 4, name: 'Artem', avatar: "https://cdn-icons-png.flaticon.com/512/147/147140.png" },
                { id: 5, name: 'Vova', avatar: "https://cdn-icons-png.flaticon.com/512/147/147140.png" },
            ]
        }
    },
    _callSubscriber() {
        console.log(`state changed`)
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        // this._state.navPage = navReducer(this._state.navPage, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;