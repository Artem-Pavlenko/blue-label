import React from 'react'
import Title from '../../atoms/Title/Title'
import TemplateList from '../../atoms/TemplateList/TemplateList'
import s from './TemplateEditor.module.scss'


const TemplateEditor = () => {
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
        <div className={s.templateEditor}>
            <Title text='Variables'/>
            <TemplateList templateList={templates} />
            <button className={s.addTemplate}>+ ADD NEW TEMPLATE</button>
            <Title text='Variables'/>
            <TemplateList templateList={templates2} />
        </div>
    )
}

export default TemplateEditor
