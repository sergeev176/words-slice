

import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        words: ['word1', 'word2'],
    },
    reducers: {
        addWord(state, action) {
            state.words.push(action.payload)
        }
    }
})

export default toolkitSlice.reducer

export const { addWord } = toolkitSlice.actions