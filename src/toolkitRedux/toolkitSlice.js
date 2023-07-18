

import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        words: JSON.parse(localStorage.getItem('words')) ? 
            JSON.parse(localStorage.getItem('words')) 
            : 
            [],
        learnedWords: JSON.parse(localStorage.getItem('learnedWords')) ? 
            JSON.parse(localStorage.getItem('learnedWords')) 
            : 
            [],
    },
    reducers: {
        addWordAction(state, action) {
            state.words.push(action.payload);
        },
        removeWordAction(state, action) {
           state.words = state.words.filter(word => word.id !== action.payload);
        },
        changeWordAction(state, action) {
            state.words.map(word => word.id === action.payload ? word.onChange = !word.onChange : word);
        },
        changeWordTextAction(state, action) {
            state.words.map(word => {
                if (word.id === action.payload.id) {
                    word.text = action.payload.text;
                    word.translation = action.payload.translation;
                    word.onChange = false;
                }
                return word;
            })
        },
        changeCountAction(state, action) {
            state.words.map(word => word.id === action.payload ? word.count += 1 : word)
        },
        clearinrCountAction(state, action) {
            state.words.map(word => word.id === action.payload ? word.count = 0 : word)
        },
        addLearnWordAction(state, action ) {
            state.learnedWords.push(action.payload);
        },
        removeLearnWordAction(state, action) {
            state.learnedWords.filter(word => word.id !== action.payload);
        }
    }
})

export default toolkitSlice.reducer

export const { 
    addWordAction,
    removeWordAction,
    changeWordAction,
    changeWordTextAction,
    changeCountAction,
    clearinrCountAction,
    addLearnWordAction,
    removeLearnWordAction,
        } = toolkitSlice.actions