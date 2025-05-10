import react , {useState} from "react"
import './App.css'

function Todo() {
  const [input, setInput] = useState()
  const [todo, setTodo] = useState([])

  const handleAddTodo = () => {
    const item = {
      id:todo.length+1,
      text:input,
      completed:false
    }
    setTodo(prev => [...prev,item])
    setInput("")
  }

  const handleToggle = (id) => {
    setTodo(
      todo.map(t => t.id === id ? {...t,completed:!t.completed} : t )
    )
  }
  const handleDelete = (id) => {
    setTodo(
      todo.filter((t) => t.id !== id)
    )
  }
  return(
    <div>
      <h1>TODO List</h1>
      <input type="text" value = {input} placeholder="Enter TODO" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => handleAddTodo()}>Add</button>

        <ul>
          {todo.map((t) => (
            <li key = {t.id}>
              <input type="checkbox" checked={t.completed} onChange={() => handleToggle(t.id)}/>
              <span className={t.completed?"text":""}>{t.text}</span>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Todo
