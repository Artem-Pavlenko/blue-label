import React from 'react'
import Filter from '../../components/organizms/Filter/Filter'
import s from './Clients.module.scss'


const Clients: React.FC = () => {
    return (
        <div className={s.clients}>
            <Filter mainTitle='Clients' btnText='SAVE AS NEW SMART VIEW'/>
        </div>
    )
}

export default Clients
