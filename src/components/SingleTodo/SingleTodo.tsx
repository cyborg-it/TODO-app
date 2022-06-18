import React, { useState } from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { TodoEntity } from '../../entities/todo'
import './style.css'

interface SingleTodoProps {
    todo: TodoEntity;
    todos: TodoEntity[];
    setTodos: React.Dispatch<React.SetStateAction<TodoEntity[]>>
}

const SingleTodo: React.FC <SingleTodoProps> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setTodoEdit] = useState<string>(todo.task);


    const handleDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))
    }

    const handleDelete= (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, task: editTodo } : todo))
          );
          setEdit(false);
    }

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
        {
            edit ? (
                <input type="text" value={editTodo} onChange={(e) => setTodoEdit(e.target.value)} className="todos__single--text" />
            ): (
                todo.done ? 
                (<s className="todos__single--text">{todo.task}</s>): 
                (<span className="todos__single--text">{todo.task}</span>)
            )
        }

        <div>
            <span className="icon"
             onClick={() => {
                if (!edit && !todo.done) {
                  setEdit(!edit);
                }
              }}
              >
                <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo