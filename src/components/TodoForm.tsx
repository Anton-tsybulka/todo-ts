import React, { useRef } from 'react'

interface ITodoForm {
    addHandler(title: string): void
}

export const TodoForm: React.FC<ITodoForm> = ({addHandler}) => {
    const ref = useRef<HTMLInputElement>(null)

    const pressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            addHandler(ref.current!.value)
            ref.current!.value = ''                     
        }
    }

    return (
        <div className="input-field mt2">
            <input
                onKeyPress={pressHandler}
                ref={ref} 
                type="text" 
                id="title" 
                placeholder="Введите название дела" />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}