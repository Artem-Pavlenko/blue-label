import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import Title from '../../atoms/Title/Title'
import TemplateList from '../../atoms/TemplateList/TemplateList'
import s from './Templates.module.scss'


type TemplateEditorType = {
    newTemplate: () => void
    templateEditor: boolean
}

const Templates: React.FC<TemplateEditorType> = ({newTemplate, templateEditor}) => {
    const templates = [
        {template: 'Account Activation', id: '1'},
        {template: 'Account Reset Password', id: '2'},
        {template: 'Account Welcome', id: '3'},
        {template: 'Bank Details', id: '4'},
        {template: 'Cant Reach You Nicht Erreicht Female', id: '5'},
        {template: 'Cant Reach You Nicht Erreicht Male', id: '6'},
        {template: 'Cant Reach You', id: '7'},
        {template: 'Account Welcome2', id: '8'},
        {template: 'Account Activation', id: '9'},
        {template: 'Account Welcome', id: '10'},
        {template: 'Cant Reach You', id: '11'},
        {template: 'Account Welcome', id: '12'},
        {template: 'Cant Reach You Nicht Erreicht Male', id: '13'},
        {template: 'Cant Reach You2.0', id: '14'},
    ]

    const templates2 = [
        {template: '{first_name} - user first name', id: '1'},
        {template: '{last_name} - user last name', id: '2'},
        {template: '{email} - user email', id: '3'},
    ]


    return (
        <div className={s.templateWrapper}>
            <div className={s.templates}>
                <Title text='Variables'/>
                <TemplateList templateList={templates}/>
                <button onClick={newTemplate} className={s.addTemplate}>+ ADD NEW TEMPLATE</button>
                <Title text='Variables'/>
                <TemplateList templateList={templates2} dark/>
            </div>
            {
                templateEditor &&
                <div className={s.templateEditorBlock}>
                    <h5>Content</h5>
                    <Editor init={{min_height: 300,}}/>
                </div>
            }
        </div>
    )
}

export default Templates
