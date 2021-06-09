import Meme from './Meme';
import AddMemeForm from './AddMemeForm'

import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  const addMeme = (newMeme) =>{
    dispatch({type: 'ADD_MEME', meme: newMeme})
  }

  const deleteMeme = (id) => {
    dispatch({type: "REMOVE_MEME", id})
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meme Generator</h1>
        <AddMemeForm  addMeme={addMeme}/>
        {memes.map(meme => <Meme 
        key={meme.id} 
        topText={meme.topText} 
        bottomText={meme.bottomText}
        img={meme.img}
        deleteMeme={() =>deleteMeme(meme.id)}
        />)
        }

      </header>
    </div>
  );
}

export default App;
