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
            <label htmlFor={label}>{label}</label>
            <input className='input' id={label} type={type}/>
        </div>
    )
}

export default Input
