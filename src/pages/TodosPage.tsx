import React, { useEffect, useState } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const story = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(story)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    
    setTodos(prev => [...prev, newTodo])    
  }

  const toggleHandler = (id: number) => {    
    setTodos(prev => 
      prev.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        }       
        
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    const question = confirm('Вы точно хотите удалить?')
    if (question) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

    return (
        <>
        <TodoForm addHandler={addHandler} />
        <TodoList 
            todos={todos}
            onToggle={toggleHandler}
            onRemove={removeHandler} />
        </>
    )
}