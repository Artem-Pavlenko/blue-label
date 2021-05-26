import React from 'react'
import s from './Note.module.scss'

export type NoteType = {
    writeBy: string
    note: string
    date: string
    id: string
}

const Note: React.FC<NoteType> = ({note, writeBy, date}) => {
    return (
        <div className={s.noteWrapper}>
            <div className={s.noteBlock}>
                <span className={s.writeBy}>{`Write by ${writeBy}`}</span>
                <p className={s.note}>{note}</p>
            </div>
            <span className={s.date}>{date}</span>
        </div>
    )
}

export default Note
