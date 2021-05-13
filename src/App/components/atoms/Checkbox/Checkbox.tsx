import React from 'react'
import './Checkbox.scss'

type CheckboxType = {
    text: string
    id: string
    item?: boolean
}


const Checkbox: React.FC<CheckboxType> = ({text, id, item}) => {
    return (
        <div className='checkbox'>
            <input className='checkboxInput' id={id} type='checkbox'/>
            <label className={item ? 'item' : ''} htmlFor={id}>{text}</label>
        </div>
    )
}

export default Checkbox
