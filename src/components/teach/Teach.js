
import './index.css'

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWordAction, changeWordAction, changeWordTextAction } from '../../toolkitRedux/toolkitSlice';

const Teach = () => {
    const words = useSelector(state => state.toolkit.words);

    const dispatch = useDispatch();
    
    const [value, setValue] = useState(''); // стэйт для инпута

    const remoweWord = (id) => dispatch(removeWordAction(id)); // удаление слова

    // нахожу значение для поля ввода инпута
    const findValue = (id) => words.map(word => word.id === id ? setValue(word.text + '-' +  word.translation) : word);

    const changeWordState = (id) => dispatch(changeWordAction(id)); // клик на слово - появление инпута

    // изменение слова
    const changeWordText = (id) => dispatch(changeWordTextAction({
        id: id, 
        text: value.split('-')[0], 
        translation: value.split('-')[1],
    }));

    let res = words.map(word => {
        return (
            <div key={word.id} className='cell'>
                {!word.onChange ? 
                    <div className='flex s-b'>
                        <span>{word.count}</span>
                        <span className='word' onClick={() => changeWordState(word.id)}>{word.text}</span>
                        <button className='mr-20 btn-remove' onClick={() => remoweWord(word.id)}>удалить слово</button>
                    </div>
                    :
                    <>
                        <input  autoFocus 
                                className='mr-20 inp'
                                value={value} 
                                onFocus={() => findValue(word.id)} 
                                onChange={(e) => setValue(e.target.value)} 
                                onBlur={() => changeWordText(word.id)}
                                />
                        
                        <button className='btn-back'>назад</button>
                    </>
                }
            </div>
        )
    })

    return (
        <div className='block color-red'>
                <p className='m-0 cell text-center'>Слова для обучения</p>
                {words.length > 0 ? 
                    <p className='m-0 cell text-center'>Для изменения слова кликните по нему</p>
                    :
                    <p className='m-0 cell text-center'>слов пока нет</p>
                }
            <div className='list'>
                {res}
            </div>
        </div>
    );
}

export default Teach;
