let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you?", likeCounter: '5' },
            { id: 2, message: "It's my first post", likeCounter: '10' }
        ],

        newPostText: 'this is the new post'
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

window.state = state;

export const addPost = (post) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounter: 15
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    reRendererTree(state);
    
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    reRendererTree(state);
}

export const addMessage = (message) => {

    let newMessage = {
        id: 5,
        text: message
    };
    state.dialogsPage.messagesData.push(newMessage);
    reRendererTree(state);
}


let reRendererTree = () => {
    console.log('state changed')
}


export const subscribe = (observer) => {
    reRendererTree = observer; //паттерн - спостерігач
}


export default state;