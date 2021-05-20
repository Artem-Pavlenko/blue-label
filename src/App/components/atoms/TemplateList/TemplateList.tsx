import React from 'react'
import cn from 'classnames'
import s from './TemplateList.module.scss'


type TemplateListType = {
    dark?: boolean
    templateList: Array<{template: string, id: string}>
}

const TemplateList: React.FC<TemplateListType> = ({dark, templateList}) => {

    return (
        <ul className={cn(s.templateList, {[s.dark]: dark})}>
            {templateList.map(t => <li key={t.id}>{t.template}</li>)}
        </ul>
    )
}

export default TemplateList
