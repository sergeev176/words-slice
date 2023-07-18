import './App.css';

import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const words = useSelector(state => state.toolkit.words)

  console.log(words)

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
