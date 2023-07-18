
import './index.css'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWordAction } from '../../toolkitRedux/toolkitSlice';

const AddWord = () => {

    const words = useSelector(state => state.toolkit.words);
    
    const [click, setClick] = useState(true); // стэйт кнопки -добавить слово-
    const [value, setValue] = useState('');   // стэйт инпута

    const dispatch = useDispatch();

    const addWord = () => {
        if (value) {
            dispatch(addWordAction({
                id: Date.now(),
                text: value.split('-')[0],
                translation: value.split('-')[1],
                count: 0,
                onChange: false,
            }));
            setValue('');
        } 
        setClick(true);
    }

    const buttonAdd = <button className='btn' onClick={() => setClick(false)}>Добавить слово</button>

    const description = <p className='descr'>Для добавления слова введите его на английском языке <br /> затем через дефис перевод на русском</p>

    const inputNewWords = <input autoFocus className='inp'value={value} onBlur={() => addWord()} onChange={(e) => setValue(e.target.value)} />

    const wordsCounter = <p className='descr'>В словаре слов: {words.length}</p>

    return (
        <div className='block color-sky flex s-b'>
            <div>
                {click? 
                    buttonAdd
                    :
                    <div>
                        {description}
                        {inputNewWords}
                    </div>
                }
                {wordsCounter}
            </div>
        </div>
        
    );
}

export default AddWord;
