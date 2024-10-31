import './App.css';
import MapTest from './MapTest';
import TodoList from './Todolist';


function App() {
  let name = "리액트";

  return (
    <div className='container'>
      <TodoList></TodoList>
      <MapTest></MapTest>
    </div>
  );
}

export default App;
