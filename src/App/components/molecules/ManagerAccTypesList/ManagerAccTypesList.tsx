import React from 'react'
import ManagerAccListHeader from '../../atoms/ManagerAccListHeader/ManagerAccListHeader'
import ManagerAccType, {ManagerAccItemType} from '../../atoms/ManagerAccType/ManagerAccType'
import ListFooter from '../ListFooter/ListFooter'
import s from './ManagerAccTypesList.module.scss'


type ManagerTypeList = {
    accTypes: Array<ManagerAccItemType>
}

const ManagerAccTypesList: React.FC<ManagerTypeList> = ({accTypes}) => {

    return (
        <div className={s.managerAccTypesList}>
            <ManagerAccListHeader/>
            {
                accTypes.map(type => <ManagerAccType key={type.ID} {...type}/>)
            }
            <ListFooter/>
        </div>
    )
}

export default ManagerAccTypesList
