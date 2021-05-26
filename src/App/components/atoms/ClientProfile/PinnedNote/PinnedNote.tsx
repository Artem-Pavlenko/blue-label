import React from 'react'
import s from './PinnedNote.module.scss'


type PinnedType = {
    className?: string
}

const PinnedNote: React.FC<PinnedType> = ({className}) => {
    return (
        <div className={`${s.pinnedNote} ${className}`}>
            <h3>Pinned Note</h3>
            <div className={s.wrapper}>
                <span className={s.title}>NO PINNED NOTE</span>
            </div>
        </div>
    )
}

export default PinnedNote
