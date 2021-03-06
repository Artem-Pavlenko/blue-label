import React from 'react'
import DocumentsListHeader from '../../atoms/DocumentsListHeader/DocumentsListHeader'
import DocumentItem, {DocumentType} from '../../atoms/DocumentItem/DocumentItem'
import ListFooter from '../../molecules/ListFooter/ListFooter'
import s from './DocumentsList.module.scss'


const DocumentsList = () => {
    const documentItems: DocumentType[] = [
        {
            docType: 'Other',
            ID: '56027',
            userType: 'Client',
            user: 'Uwe Se ibold',
            docName: 'BANK DETAILS.docx',
            status: 'Approved',
            uploadedBy: 'Nasia Kounouni',
            created: '5 months ago'
        },
        {
            docType: 'Proof of Payment - Front',
            ID: '56026',
            userType: 'Client',
            user: 'Uwe Se ibold',
            docName: 'Kreditkarte Vorderseite.pdf',
            status: 'Approved',
            uploadedBy: 'User',
            created: 'a year ago'
        },
        {
            docType: 'Bank SWIFT',
            ID: '56025',
            userType: 'Client',
            user: 'Uwe Se ibold',
            docName: 'Bankkontodaten.pdf',
            status: 'Approved',
            uploadedBy: 'User',
            created: 'a year ago'
        },
        {
            docType: 'Other',
            ID: '56024',
            userType: 'Client',
            user: 'Uwe Se ibold',
            docName: 'BANK DETAILS.docx',
            status: 'Approved',
            uploadedBy: 'Noah Kaufmann',
            created: '5 months ago'
        },
        {
            docType: 'Proof of Payment - Front',
            ID: '56023',
            userType: 'Client',
            user: 'Uwe Se ibold',
            docName: 'Kreditkarte Vorderseite.pdf',
            status: 'Approved',
            uploadedBy: 'User',
            created: 'a year ago'
        },
        {
            docType: 'Bank SWIFT',
            ID: '56022',
            userType: 'Client',
            user: 'Uwe Se ibold',
            docName: 'BANK DETAILS.docx',
            status: 'Approved',
            uploadedBy: 'User',
            created: 'a year ago'
        },
        {
            docType: 'Other',
            ID: '56021',
            userType: 'Client',
            user: 'Uwe Se ibold',
            docName: 'Kreditkarte Vorderseite.pdf',
            status: 'Approved',
            uploadedBy: 'Noah Kaufmann',
            created: '5 months ago'
        },
        {
            docType: 'Proof of Payment - Front',
            ID: '56020',
            userType: 'Client',
            user: 'Uwe Se ibold',
            docName: 'Bankkontodaten.pdf',
            status: 'Approved',
            uploadedBy: 'User',
            created: 'a year ago'
        },
    ]

    return (
        <div className={s.documentsList}>
            <div className={s.list}>
                <DocumentsListHeader/>
                {documentItems.map(d => <DocumentItem key={d.ID} {...d}/>)}
            </div>
            <ListFooter totalCount={28}/>
        </div>
    )
}

export default DocumentsList
