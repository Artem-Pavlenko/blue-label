import React, {ChangeEvent} from 'react'
import './CheckboxSquare.scss'


type Checkbox = {
    id: string
    text: string
    checked: boolean
    onChange: (e: boolean) => void
}

const CheckboxSquare: React.FC<Checkbox> = ({text, id, checked, onChange}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.checked)

    return (
        <div className='checkBoxSquare'>
            <input className='checkBoxSquareInput' onChange={onChangeHandler} checked={checked} type="checkbox" id={id}/>
            <label className='square' htmlFor={id}>{text}</label>
        </div>
    )
}

export default CheckboxSquare
