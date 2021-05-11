import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'
import { ITodo } from './interfaces'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [...prev, newTodo])    
  }
  return (
    <>
    <Navbar />
    <div className="container" >
      <TodoForm addHandler={addHandler} />
    </div>
    </>
  )
}

export default App
