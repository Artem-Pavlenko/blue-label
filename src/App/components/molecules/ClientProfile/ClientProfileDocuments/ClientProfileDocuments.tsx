import React from 'react'
import PinnedNote from '../../../atoms/ClientProfile/PinnedNote/PinnedNote'
import DocumentsList from '../../../organizms/DocumentsList/DocumentsList'
import DropDawnList from '../../../atoms/Tags/DropDawnList/DropDawnList'
import Input from '../../../atoms/Tags/Input/Input'
import s from './ClientProfileDocuments.module.scss'


const ClientProfileDocuments = () => {

    const doTypes = [{value: 'Guido'}, {value: 'Tempo'}, {value: 'example'}]

    return (
        <div className={s.documentsBlock}>
            <div className={s.documents}>
                <div className={s.uploadDocument}>
                    <h3>Upload document</h3>
                    <div className={s.wrapper}>
                        <DropDawnList className={s.docTypeList} items={doTypes} label='Document Type *'/>
                        <Input className={s.fileUpload} label='Choose File To Upload *'/>
                    </div>
                    <button>UPLOAD</button>
                </div>
                <PinnedNote className={s.docPinnedNote}/>
            </div>
            <DocumentsList/>
        </div>
    )
}

export default ClientProfileDocuments
