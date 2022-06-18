import React, { useRef } from 'react'
import './style.css'

interface TodoProps {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  submitTodos: (event: React.SyntheticEvent) => void
}
const InputField: React.FC<TodoProps> = ({ todo, setTodo, submitTodos}) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={(e) => {
      submitTodos(e)
      inputRef.current?.blur();
    }}>
     <input
        type="input"
        ref={inputRef}
        placeholder="Enter a Todo"
        value={todo}
        onChange={
          (e) => setTodo(e.target.value)
        }
        className="input__box"
      />
        <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  )
}

export default InputField