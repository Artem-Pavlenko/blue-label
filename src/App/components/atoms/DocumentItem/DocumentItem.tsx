import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import downloadFileImg from '../../../assets/images/icons/download_file.svg'
import s from './DocumentItem.module.scss'
import './DocumentItem.scss'

export type DocumentType = {
    docType: string
    ID: string
    userType: string
    user: string
    docName: string
    status: string
    uploadedBy: string
    created: string
}

const DocumentItem: React.FC<DocumentType> = (props) => {
    return (
        <div className={s.docItem}>
            <div className={`${s.downloadDoc} download`}>
                <Checkbox text='' id={props.ID}/>
                <img src={downloadFileImg} alt=''/>
            </div>
            <div className={s.docType}>
                {props.docType}
            </div>
            <div className={s.id}>
                {props.ID}
            </div>
            <div className={s.userType}>
                {props.userType}
            </div>
            <div className={s.user}>
                {props.user}
            </div>
            <div className={s.docName}>
                {props.docName}
            </div>
            <div className={s.status}>
                {props.status}
            </div>
            <div className={s.uploadedBy}>
                {props.uploadedBy}
            </div>
            <div className={s.created}>
                {props.created}
            </div>
        </div>
    )
}

export default DocumentItem
