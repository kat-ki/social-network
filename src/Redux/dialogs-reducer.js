export let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export let SEND_MESSAGE = 'SEND_MESSAGE';

let initState = {
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
};

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
};

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;

