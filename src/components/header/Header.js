import './index.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link className='link' to='/add'>добавление слов</Link>
            <Link className='link' to='/trainer'>тренажёр</Link>
            <Link className='link' to='/teach'>слова для обучения</Link>
            <Link className='link' to='/studied'>выученные слова</Link>
      </header>
    );
}

export default Header;
