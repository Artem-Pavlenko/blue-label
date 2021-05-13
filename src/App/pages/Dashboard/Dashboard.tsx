import React from 'react'
import DashboardCard from '../../components/atoms/DashboardCard/DashboardCard'
import Affiliates from '../../components/molecules/AffiliatItem/Affiliates'
import s from './Dashboard.module.scss'


const Dashboard = () => {

    const dashCards = [
        {date: 'Jan 5th 21 - Jan 5th 21', money: 0, description: 'New Leads'},
        {date: 'Jan 5th 21 - Jan 5th 21', money: 0, description: 'New Conversions'},
        {date: 'Jan 5th 21 - Jan 5th 21', money: 0, description: 'Deposits'},
        {date: 'Jan 5th 21 - Jan 5th 21', money: 0, description: 'Withdrawals'},
    ]

    return (
        <div className={s.dashboard}>
            <h3>My Dashboard</h3>
            <div className={s.dashboardCards}>
                {
                    dashCards.map(c => <DashboardCard key={c.description} {...c}/>)
                }
            </div>
            <div className={s.main}>
                <div className={s.upcomingReminders}>
                    <p>Upcoming Reminders</p>
                    <span>NO UPCOMING REMINDERS.</span>
                </div>
               <Affiliates/>
            </div>
        </div>
    )
}

export default Dashboard
