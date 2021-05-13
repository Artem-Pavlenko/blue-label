import React from 'react'
import Filet from '../../components/organizms/Filet/Filet'
import s from './Clients.module.scss'


const Clients: React.FC = () => {
    return (
        <div className={s.clients}>
            <Filet mainTitle='Clients' btnText='SAVE AS NEW SMART VIEW'/>
        </div>
    )
}

export default Clients
