import React from 'react'
import {Link} from 'react-router-dom'
import './Checkbox.scss'

type CheckboxType = {
    text?: string
    id: string
    item?: boolean
    params?: string
}


const Checkbox: React.FC<CheckboxType> = ({text, id, item, params}) => {
    return (
        <div className='checkbox'>
            <input className='checkboxInput' id={id} type='checkbox'/>
            <Link to={`/profile/${params}`}>
                <label className={item ? 'label item' : 'label'} htmlFor={id}>{text}</label>
            </Link>
        </div>
    )
}

export default Checkbox
