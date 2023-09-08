import profileReducer, {ADD_POST, UPDATE_NEW_POST_TEXT} from "./profile-reducer";
import dialogsReducer, {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'Hi, how was your vacation?', likesCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'John Snowball'},
                {id: 2, name: 'Michael Smith'},
                {id: 3, name: 'Nicole Fieldsman'},
                {id: 4, name: 'Anthony Bids'},
                {id: 5, name: 'Simona Kris'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi. I am fine. And you?'},
                {id: 3, message: 'Never seen. What does it look like?'},
                {id: 4, message: 'Hey. I have passed my exam!'},
                {id: 5, message: 'No, actually not. What about you?'}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {     // bla bla
    }, // is rerenderEntireTree function from index.js

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    }
}


export default store;
/*
window.store = state;*/
