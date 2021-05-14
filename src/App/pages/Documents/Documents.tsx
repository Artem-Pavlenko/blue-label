import React from 'react'
import Filter from '../../components/organizms/Filter/Filter'
import DocumentsList from '../../components/organizms/DocumentsList/DocumentsList'
import s from './Documents.module.scss'


const Documents = () => {



    return (
        <div className={s.documents}>
            <Filter mainTitle='DOCUMENTS' btnText='SAVE AS NEW SMART VIEW'/>
            <DocumentsList/>
        </div>
    )
}

export default Documents
