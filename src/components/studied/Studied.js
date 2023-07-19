
import './index.css'

import React from 'react';
import { useSelector } from 'react-redux';


const Studied = () => {
    const learnedWords = useSelector(state => state.toolkit.learnedWords);
   
    let res = learnedWords.map(word => {
        return <div key={word.id}>{word.text}</div>
    })

    return (
        <>
            <div className='studied'>
                <p>Выученные слова</p>
                <div>
                    {learnedWords.length > 0 ? res : 'слов пока нет'}
                </div>
            </div>
            
        </>
    );
}

export default Studied;
