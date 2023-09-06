
let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi. I am fine. And you?'},
                {id: 3, message: 'Never seen. What does it look like?'},
                {id: 4, message: 'Hey. I have passed my exam!'},
                {id: 5, message: 'No, actually not. What about you?'}
            ],
            dialogs: [
                {id: 1, name: 'John Snowball'},
                {id: 2, name: 'Michael Smith'},
                {id: 3, name: 'Nicole Fieldsman'},
                {id: 4, name: 'Anthony Bids'},
                {id: 5, name: 'Simona Kris'}]
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export const addPostAC = () => ( {type: ADD_POST} )

export const updateNewPostTextAC = (text) => ( { type: UPDATE_NEW_POST_TEXT, newText: text} )


export default store;
/*
window.store = state;*/


/*    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },*/
/*  updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
  },*/