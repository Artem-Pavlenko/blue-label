import React from 'react'
import Checkbox from '../Tags/Checkbox/Checkbox'
import s from './DocumentsListHeader.module.scss'


const DocumentsListHeader = () => {
    return (
        <div className={s.docListHeader}>
            <div className={s.action}>
                <Checkbox text='Action' id='action' />
            </div>
            <div className={s.docType}>
                Document Type
            </div>
            <div className={s.id}>
                ID
            </div>
            <div className={s.userType}>
                User Type
            </div>
            <div className={s.user}>
                User
            </div>
            <div className={s.docName}>
                Document Name
            </div>
            <div className={s.status}>
                Status
            </div>
            <div className={s.uploadedBy}>
                Uploaded By
            </div>
            <div className={s.created}>
                Created
            </div>
        </div>
    )
}

export default DocumentsListHeader
