import React from 'react'
import s from './PinnedNote.module.scss'


const PinnedNote = () => {
    return (
        <div className={s.pinnedNote}>
            <h3>Pinned Note</h3>
            <div className={s.wrapper}>
                <span className={s.title}>NO PINNED NOTE</span>
            </div>
        </div>
    )
}

export default PinnedNote
