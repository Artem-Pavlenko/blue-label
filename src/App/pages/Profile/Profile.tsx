import React from 'react'
import {useParams} from 'react-router-dom'
import ClientProfileHeader from '../../components/atoms/ClientProfileHeader/ClientProfileHeader'
import ProfileDeskInfo from '../../components/molecules/UserProfile/ProfileDeskInfo/ProfileDeskInfo'
import ProfileInfo from '../../components/organizms/ProfileInfo/ProfileInfo'
import DropDawnList from '../../components/atoms/DropDawnList/DropDawnList'
import s from './Profile.module.scss'
import './Profile.scss'


const Profile = () => {
    const {userId} = useParams<{ userId: string }>()

    const statuses = [
        {value: 'status'}, {value: 'example'}, {value: 'Approved'}
    ]

    return (
        <>
            <article className={s.clientInfo}>
                <section className={s.mainInfo}>
                    <ClientProfileHeader name='Guido Otte' id={userId}/>
                    <div className={s.mainInfoBody}>
                        <ProfileDeskInfo owner='Marco Sommer' manager='Noah Kaufmann' desk='Germany'/>
                        <div className={s.status}>
                            <DropDawnList className='first' label='Status' items={statuses}/>
                            <DropDawnList label='Verification Status' items={statuses}/>
                        </div>
                        <div className={s.contacts}>
                            <div className={s.call}>
                                <div className={s.callImg}/>
                                <span>Click to Call</span>
                            </div>
                            <div className={s.email}>
                                <div className={s.emailImg}/>
                                <span>guiott65@web.de</span>
                            </div>
                            <div className={s.accType}>
                                <div className={s.left}>
                                    <div className={s.accTypeIcon}/>
                                    <span>BRONZE</span>
                                    <div className={s.edit}/>
                                </div>
                                <span className={s.type}>|&emsp;  Account type</span>
                            </div>
                        </div>
                        <div className={s.resources}>
                            <div className={s.resourcesDescription}>
                                <div>
                                    <span>Total Deposits</span>
                                    <span>443,25 €</span>
                                </div>
                                <div>
                                    <span>Total Withdrawn</span>
                                    <span>443,25 €</span>
                                </div>
                                <div>
                                    <span>Withdrawble Balance</span>
                                    <span>443,25 €</span>
                                </div>
                                <div>
                                    <span>Investable Balance</span>
                                    <span>443,25 €</span>
                                </div>
                            </div>
                            <button>LOGIN AS USER</button>
                        </div>
                    </div>
                </section>
                <section className={s.moreInfo}>
                    <ProfileInfo />
                </section>
            </article>
            <footer className={s.profileFooter}>

            </footer>
        </>
    )
}

export default Profile
