import { useDispatch, useSelector } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import './App.css';

function App() {

  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();

  const addTodo = (todo) => {
    dispatch({type: 'ADD_TODO', todo})
  }

  const deleteTodo = id =>{
    dispatch({type: 'DELETE_TODO', id});
  }

  const todoList = todos.map(t => {
    return(
      <li 
      style={{listStyle: 'none'}}
      key={t.id}>{t.todo} 
      <button style={{margin: '0 4px'}} onClick={()=> deleteTodo(t.id)}>X</button>
      </li>
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo's</h1>
        <AddTodoForm addTodo={addTodo}/>
        <ul>
          {todoList}
        </ul>
      </header>
    </div>
  );
}

export default App;
