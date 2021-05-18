import React from 'react'
import Summary, {SummaryType} from '../../atoms/Summary/Summary'
import Paginator from '../Paginator/Paginator'
import s from './ListFooter.module.scss'


const ListFooter:React.FC<SummaryType> = (props) => {
    return (
        <div className={s.listFooter}>
            <Summary {...props}/>
            <Paginator/>
        </div>
    )
}

export default ListFooter
