import React, {  useState } from 'react'

interface ITodoForm {
    addHandler(title: string): void
}

export const TodoForm: React.FC<ITodoForm> = ({addHandler}) => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const pressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            addHandler(title)
            setTitle('')                  
        }
    }

    return (
        <div className="input-field mt2">
            <input
                onChange={changeHandler}
                onKeyPress={pressHandler}
                value={title} 
                type="text" 
                id="title" 
                placeholder="Введите название дела" />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}