import React from 'react'
import s from './OverviewProfile.module.scss'


const OverviewProfile = () => {
    const financials = [
        {finance: '800,00 €', title: 'Total Deposits', id: '1'},
        {finance: '0,00 €', title: 'Total Withdrawn', id: '2'},
        {finance: '-13,84 €', title: 'Total Withdrawn', id: '3'},
        {finance: '800,00 €', title: 'Net. Deposits', id: '4'},
        {finance: '300,00 € - By Maximillian Thalberg a year ago', title: 'First Time Deposit (FTD)', id: '5'},
        {finance: '-13,84 €', title: 'Withdrawble Balance', id: '6'},
        {finance: '500,00 € - By Noah Kaufmann a year ago', title: 'Last Deposit', id: '7'}
    ]

    return (
        <div className={s.overviewProfile}>
            <div className={s.blockA}>
                <div className={s.information}>
                    <h3>Information</h3>
                    <div className={s.wrapper}>
                        <div className={s.infoItem}>
                            <span>16:37</span>
                            <span className={s.title}>Local Current Time</span>
                        </div>
                        <div className={s.infoItem}>
                            <span>6 months ago</span>
                            <span className={s.title}>Last Activity</span>
                        </div>
                        <div className={s.infoItem}>
                            <span>30/10/2019 15:49</span>
                            <span className={s.title}>Registered On</span>
                        </div>
                    </div>
                </div>
                <div className={s.verificationHistory}>
                    <h3>Verification History</h3>
                    <div className={s.wrapper}>
                        <span className={s.title}>NO VERIFICATION HISTORY</span>
                    </div>
                </div>
                <div className={s.pinnedNote}>
                    <h3>Pinned Note</h3>
                    <div className={s.wrapper}>
                        <span className={s.title}>NO PINNED NOTE</span>
                    </div>
                </div>
            </div>
            <div className={s.blockB}>
                <h3>Financial Overview</h3>
                <div className={s.wrapper}>
                    {
                        financials.map(f => <div key={f.id} className={s.item}>
                            <span className={s.finance}>{f.finance}</span>
                            <span className={s.title}>{f.title}</span>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default OverviewProfile
