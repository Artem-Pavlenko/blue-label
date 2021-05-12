import React from 'react'
import s from './DashboardCard.module.scss'


type DashboardCardType = {
    date: string
    money: number
    description: string
}

const DashboardCard: React.FC<DashboardCardType> = ({date, description, money}) => {
    return (
        <div className={s.dashboardCard}>
            <div className={s.date}>
                {date}
            </div>
            <div className={s.money}>
                {money.toFixed(2)} €
            </div>
            <div className={s.description}>
                {description}
            </div>
        </div>
    )
}


export default DashboardCard
