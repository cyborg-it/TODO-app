import React from 'react'
import { TodoEntity } from '../../entities/todo'
import SingleTodo from '../SingleTodo/SingleTodo'
import "./style.css"

interface TodosProps {
    todos: TodoEntity[],
    setTodos: React.Dispatch<React.SetStateAction<TodoEntity[]>>
}

const TodoList: React.FC <TodosProps> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
        {todos.map(todo => (
           <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}

export default TodoList