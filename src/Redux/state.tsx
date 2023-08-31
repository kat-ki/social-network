let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 0 },
            { id: 2, message: 'Hi, how was your vacation?', likesCount: 15 }
        ]
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

export default state;