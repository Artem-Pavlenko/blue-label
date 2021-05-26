import React from 'react'
import './Textarea.scss'

type TextareaType = {
    label: string
    className?: string
}


const Textarea: React.FC<TextareaType> = ({ label, className}) => {
    return (
        <div className={`textareaWrapper ${className}`}>
            <label htmlFor={label}>{label}</label>
            <textarea name="" id={label}/>
        </div>
    )
}

export default Textarea
