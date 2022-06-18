import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
import { TodoEntity } from './entities/todo';

function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoEntity[]>([]);

  const submitTodos = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), task: todo, done: false}]);
      setTodo("")
    }
  }

  console.log(todos)

  return (
    <div className="App">
     <span className="heading">Taskify</span>
     <InputField todo={todo} setTodo={setTodo} submitTodos={submitTodos} />
     <TodoList todos={todos} setTodos={setTodos} />
     
    </div>
  );
}

export default App;
