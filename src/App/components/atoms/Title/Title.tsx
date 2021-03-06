import React from 'react'
import s from './Title.module.scss'

type TitleType = {
    text: string
}

const Title: React.FC<TitleType> = ({text}) => {
    return (
        <div className={s.titleBlock}>
            <span>{text}</span>
        </div>
    )
}

export default Title
