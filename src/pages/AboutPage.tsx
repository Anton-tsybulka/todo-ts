import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const getBack = useHistory()

    return(
        <>
            <h1>Страница информации</h1>
            <button 
                className="btn"
                onClick={() => getBack.push('/')} >
                Обратно
            </button>
        </>
    )
}