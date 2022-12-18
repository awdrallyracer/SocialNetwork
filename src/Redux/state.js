import reRendererTree from "../render";

let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you?", likeCounter: '5' },
            { id: 2, message: "It's my first post", likeCounter: '10' }
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

export let addPost = (post) => {
    let newPost = {
        id: 5,
        message: post,
        likeCounter: 15
    };
    state.profilePage.postsData.push(newPost);
    reRendererTree(state);
}

export let addMessage = (message) => {

    let newMessage = {
        id: 5,
        text: message
    };
    state.dialogsPage.messagesData.push(newMessage);
    reRendererTree(state);
}




export default state;