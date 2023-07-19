

import './index.css'

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWordAction, removeLearnWordAction, } from '../../toolkitRedux/toolkitSlice';


const ButtonSave = () => {
    const words = useSelector(state => state.toolkit.words);
    const learnedWords = useSelector(state => state.toolkit.learnedWords);

    const dispatch = useDispatch();

    const [reset, setReset] = useState(false); // стэйт нажатия кнопки сброса

    const saveWordsLS = () => {
        localStorage.setItem('words', JSON.stringify(words));
        localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
    }

    const clear = () => {
        // очищаю локальное хранилище
        localStorage.clear();
        // деактивация кнопки сброса
        setReset(false);
        // удаляю слова из основного массива
        words.map(word => dispatch(removeWordAction(word.id)));
        // удаляю слова из массива уже изученных слов
        learnedWords.map(word => dispatch(removeLearnWordAction(word.id)));
    }

    return (
        <div className='save-block'>
            {!reset ? 
                <>
                    <button onClick={saveWordsLS} className='save-button mr'>Сохранить изменения</button>
                    <button className='save-button' onClick={() => setReset(true)}>Сброс</button>
                </>
                :
                <div>
                    <p className='danger-text'>нажатие на кнопку приведёт к утрате всех данных</p>
                    <button className='save-button' autoFocus onBlur={() => setReset(false)} onClick={clear}>Сброс</button>
                </div>
            }
        </div>
    );
}

export default ButtonSave;