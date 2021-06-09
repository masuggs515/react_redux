const INITIAL_STATE = {
    memes: [{
        id: 1,
        topText: 'default',
        bottomText: 'meme',
        img: 'https://cdn.vox-cdn.com/thumbor/KUIkaV6ggwn5_HVa7I6kIu1dLT4=/0x66:735x434/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/19933026/image.png'
    }]
};

const rootReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "ADD_MEME") {
        return {
            ...state,
            memes: [...state.memes, { ...action.meme }]
        }
    }
    if (action.type === "REMOVE_MEME") {
        return {
            ...state,
            memes: state.memes.filter(meme => meme.id !== action.id)
        }
    }

    return state;
};

export default rootReducer;