
import './index.css'

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRandom } from '../../helpers';
import { removeWordAction, addLearnWordAction, clearinrCountAction,
     changeCountAction, addWordAction, removeLearnWordAction } from '../../toolkitRedux/toolkitSlice';

const Trainer = () => {

    const [finish, setFinish] = useState(false); // стейт завершонности занятия
    const [noKnow, setNoKnow] = useState(false); // стейт нажатия кнопки -не знаю-
    const [word, setWord] = useState('');        // стейт случайного выбора слова
    
    const dispatch = useDispatch();
    const words = useSelector(state => state.toolkit.words);
    const learnedWords = useSelector(state => state.toolkit.learnedWords);

    // при нажатии на кнопку -знаю-
    const nextWord = (id) => {
        if (words.length > 0) {
            words.map(word => {
                if (word.id === id && word.count >= 4) {
                    // при счётчике = 5 переношу слово в массив уже выученных слов
                    dispatch(addLearnWordAction(word));
                    // и удаляю из основного
                    dispatch(removeWordAction(word.id));
                } else {
                    return word;
                }
                return word;
            })

            // изменяю счётчик нажатия кнопки -знаю-
            dispatch(changeCountAction(id));
            // выбор следующего слова 
            choiceWord();
        }
    }

    // при нажатии на кнопку -продолжить- 
    const goNext = () => {
        // убираю перевод предыдущего слова
        setNoKnow(false);
        // выбор следующего слова 
        choiceWord();
    }

    function choiceWord() {
        if (learnedWords.length > 0 && getRandom(5) === 0) {
            // выбираю слово из уже выученных
            setWord(learnedWords[getRandom(learnedWords.length)]);
        } else {
            // или выбираю из списка слов для заучивания
            setWord(words[getRandom(words.length)]);
        }
    }

    // при нажатии на кнопку -не знаю-
    const showTranslate = (id) => {
        // показываю перевод
        setNoKnow(true);
        // переношу слово в массив для заучивания
        learnedWords.map(word => word.id === id ? dispatch(addWordAction(word)) : word);
        // очищаю счётчик нажатия на кнопку -знаю-
        dispatch(clearinrCountAction(id));
        // удаляю из списка уже выученных слов
        dispatch(removeLearnWordAction(id));
    }

    // при нажатии на кнопку -начать-
    const startNewWord = () => {
        setFinish(true);
        nextWord();
    }

    let buttonKnow   = <button className='button mr' onClick={() => nextWord(word.id)}>знаю</button>
    let buttonNoKnow = <button className='button mr' onClick={() => showTranslate(word.id)}>не знаю</button>
    let buttonResume = <button className='button mr' onClick={goNext}>продолжить</button>
    let startButton  = <button className='button' onClick={startNewWord}>начать</button>
    let buttonFinish = <button className='button' onClick={() => setFinish(false)}>закончить</button>
    let descr        = <div className='trainer-descr'>в базе слов нет</div>

    return (
        <div className='trainer-block'>
            {!finish? 
                startButton 
                :
                <div>
                    {words.length > 0 ? 
                        <div className='trainer-row'>
                            <div className='text'>
                                {word.text}
                                {noKnow ? ' - ' + word.translation : ''}
                            </div>
                            {!noKnow ?
                                <div>
                                    {buttonKnow}
                                    {buttonNoKnow}
                                </div>
                                :
                                <div>
                                    {buttonResume}
                                </div>
                            }
                            {buttonFinish}
                        </div>
                        :
                        descr
                    }
                </div>
            }
        </div>
    );
}

export default Trainer;
