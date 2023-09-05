let rerenderEntireTree = () => {}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 0 },
            { id: 2, message: 'Hi, how was your vacation?', likesCount: 15 }
        ],
        newPostText: ''
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hi. I am fine. And you?' },
            { id: 3, message: 'Never seen. What does it look like?' },
            { id: 4, message: 'Hey. I have passed my exam!' },
            { id: 5, message: 'No, actually not. What about you?' }
        ],
        dialogs: [
            { id: 1, name: 'John Snowball' },
            { id: 2, name: 'Michael Smith' },
            { id: 3, name: 'Nicole Fieldsman' },
            { id: 4, name: 'Anthony Bids' },
            { id: 5, name: 'Simona Kris' }]
    }
}

window.state = state;
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;