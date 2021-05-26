import React from 'react'
import s from './Notes.module.scss'
import PinnedNote from "../../../atoms/ClientProfile/PinnedNote/PinnedNote";
import Textarea from "../../../atoms/Tags/Textarea/Textarea";


const Notes = () => {

    const notes = [
        {
            writeBy: 'Nasia Kounouni',
            note: 'the client had settlement please do not contact!!!',
            date: '3 months ago',
            id: '1'
        },
        {
            writeBy: 'Lukas Engel',
            note: 'client said that he isnt good to speak when he hear our name and hung up',
            date: '3 months ago',
            id: '2'
        },
        {writeBy: 'Nasia Kounouni', note: 'he will send 500 tomorrow with 20% Bonus', date: '3 months ago', id: '3'},
        {writeBy: 'Nasia Kounouni', note: 'has still no money YGB next campaign', date: '3 months ago', id: '4'},
        {writeBy: 'Nasia Kounouni', note: 'na 3.1', date: '3 months ago', id: '5'},
        {writeBy: 'Lukas Engel', note: 'has still no money YGB next campaign', date: '3 months ago', id: '6'},
        {writeBy: 'Lukas Engel', note: 'has still no money YGB next campaign', date: '3 months ago', id: '7'},
        {writeBy: 'Lukas Engel', note: 'has still no money YGB next campaign', date: '3 months ago', id: '8'},
        {writeBy: 'Nasia Kounouni', note: 'na 3.1', date: '3 months ago', id: '9'},
        {writeBy: 'Lukas Engel', note: 'has still no money YGB next campaign', date: '3 months ago', id: '10'},
        {writeBy: 'Nasia Kounouni', note: 'has still no money YGB next campaign', date: '3 months ago', id: '11'},
        {writeBy: 'Lukas Engel', note: 'he will send 200 tomorrow with 20% Bonus', date: '3 months ago', id: '12'},
        {writeBy: 'Nasia Kounouni', note: 'na 3.1', date: '3 months ago', id: '13'},
        {writeBy: 'Nasia Kounouni', note: 'he will send 1500 tomorrow with 20% Bonus', date: '3 months ago', id: '14'},
        {writeBy: 'Nasia Kounouni', note: 'has still no money YGB next campaign', date: '3 months ago', id: '15'},
        {writeBy: 'Nasia Kounouni', note: 'na 3.1', date: '3 months ago', id: '16'},
        {writeBy: 'Nasia Kounouni', note: 'he will send 500 tomorrow with 20% Bonus', date: '3 months ago', id: '17'},
        {writeBy: 'Lukas Engel', note: 'has still no money YGB next campaign', date: '3 months ago', id: '18'},
        {writeBy: 'Lukas Engel', note: 'na 3.1', date: '', id: ''},
    ]

    return (
        <div className={s.notesBlock}>
            <div className={s.newNoteWrapper}>
                <div className={s.newNote}>
                    <Textarea label='Type something'/>
                    <button>SAVE</button>
                </div>
                <div className={s.pinnedNotesWrapper}>
                    <PinnedNote/>
                </div>
            </div>
            <div className={s.notes}>

            </div>
        </div>
    )
}

export default Notes
