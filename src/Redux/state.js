let state = {
    profilePage: {
        postsData: [
            { message: "Hi, how are you?", likeCounter: '5' },
            { message: "It's my first post", likeCounter: '10' }
        ]
    },

    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Andrii' },
            { id: 2, name: 'Anton' },
            { id: 3, name: 'Ilia' }
        ],

        messagesData: [
            { id: 0, text: "Hi" },
            { id: 1, text: "How you doing?" },
            { id: 2, text: "Let's drink some coffee tomorrow" }
        ]
    }
};

export default state;