import { AddPostActionCreator } from "../actions/actions"
import profileReducer from "./dialogs-reducer"

let state = {
    postsData: [
        { id: 1, text: 'Hi', likesCount: 1 },
        { id: 2, text: 'You are awesome!', likesCount: 222 },
    ],
}

it("count of posts should be 3", () => {
    // 1. test data
    let action = AddPostActionCreator('asd')
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.postsData.length).toBe(3)
})

// it("text of message should be correct", () => {
//     // 1. test data
//     let action = sendNewMessage('TEST')
//     // 2. action
//     let newState = dialogsReducer(state, action);
//     // 3. expectation
//     expect(newState.msgsData[3].text).toBe('TEST')
// })