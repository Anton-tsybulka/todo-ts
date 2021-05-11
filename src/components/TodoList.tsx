import React from 'react'
import { ITodo } from '../interfaces'

interface ITodoList {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
}

export const TodoList: React.FC<ITodoList> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return <p className="center">Дел нет!</p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo =>{
                const classes: string[] = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }                

                return (
                    <li 
                        className={classes.join(' ')} 
                        key={todo.id}>
                        <label>
                            <input 
                                type="checkbox" 
                                onChange={() => onToggle(todo.id)}
                                checked={todo.completed} />
                            <span>{todo.title}</span>
                            <i 
                                onClick={(e) => removeHandler(e, todo.id)}
                                className="material-icons red-text">
                                    delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}