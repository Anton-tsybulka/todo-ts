import React from 'react'
import { ITodo } from '../interfaces'

interface ITodoList {
    todos: ITodo[]
}

export const TodoList: React.FC<ITodoList> = ({todos}) => {
    return (
        <ul>
            {todos.map(todo =>{
                return (
                    <li className="todo">
                        <label>
                            <input type="checkbox" />
                            <span></span>
                            <i className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}