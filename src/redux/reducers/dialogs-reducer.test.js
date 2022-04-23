import { sendNewMessage } from "../actions/actions"
import dialogsReducer from "./dialogs-reducer"

let state = {
    msgsData: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'How your react?' },
    ],
}

it("count of messages should be 4", () => {
    // 1. test data
    let action = sendNewMessage('TEST')
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.msgsData.length).toBe(4)
})

it("text of message should be correct", () => {
    // 1. test data
    let action = sendNewMessage('TEST')
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.msgsData[3].text).toBe('TEST')
})