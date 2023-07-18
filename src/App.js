import './App.css';

// import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import AddWord from './components/addWord/AddWord';
import Trainer from './components/trainer/Trainer';
import Teach from './components/teach/Teach';
import Studied from './components/studied/Studied';
import ButtonSave from './components/buttonSave/ButtonSave';


function App() {

  // const dispatch = useDispatch()
  // const words = useSelector(state => state.toolkit.words)

  return (
    <div className='container'>

      

      <Header />
      <ButtonSave />
      <Routes>
        <Route path='/add' element={<AddWord />} />
        <Route path='/trainer' element={<Trainer />} />
        <Route path='/teach' element={<Teach />} />
        <Route path='/studied' element={<Studied />} />
      </Routes>


    </div>
  );
}

export default App;
