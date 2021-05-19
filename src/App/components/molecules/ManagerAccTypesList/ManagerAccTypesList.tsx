import React from 'react'
import ManagerAccListHeader from '../../atoms/ManagerAccListHeader/ManagerAccListHeader'
import ManagerAccType, {ManagerAccItemType} from '../../atoms/ManagerAccType/ManagerAccType'
import ListFooter from '../ListFooter/ListFooter'
import s from './ManagerAccTypesList.module.scss'


const ManagerAccTypesList = () => {
    const managerTypes: ManagerAccItemType[] = [
        {
            name: 'Starter',
            ID: '1',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '2',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '3',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '4',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '5',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '6',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '7',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
        {
            name: 'Starter',
            ID: '8',
            amount: '200 000,00 €',
            networkFree: '50%',
            withdrawFree: '0%',
            created: 'a year ago'
        },
    ]

    return (
        <div className={s.managerAccTypesList}>
            <ManagerAccListHeader/>
            {
                managerTypes.map(type => <ManagerAccType key={type.ID} {...type}/>)
            }
            <ListFooter/>
        </div>
    )
}

export default ManagerAccTypesList
