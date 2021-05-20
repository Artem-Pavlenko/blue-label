import React from 'react'
import Input from '../../atoms/Input/Input'
import './NewTemplate.scss'


const NewTemplate = () => {
    return (
        <div className='newTemplate'>
            <Input className='long' label='Template Name' />
            <Input className='long' label='Template Type' />
            <button>SAVE</button>
            <Input className='long' label='Extra content' />
            <Input className='long' label='System Timezone' />
            <Input className='short' label='Languages' />
        </div>
    )
}

export default NewTemplate
