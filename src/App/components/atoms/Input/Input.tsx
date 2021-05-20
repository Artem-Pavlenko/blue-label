import React from 'react'
import './Input.scss'

type InputType = {
    type?: string
    label: string
    className?: string
}

const Input: React.FC<InputType> = ({type = 'text', label, className}) => {
    return (
        <div className={`inputWrapper ${className}`}>
            <label htmlFor="input">{label}</label>
            <input className='input' id='input' type={type}/>
        </div>
    )
}

export default Input
