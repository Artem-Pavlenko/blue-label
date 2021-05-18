import React from 'react'
import s from './MyProfile.module.scss'

const MyProfile = () => {
    return (
        <div className={s.myProfile}>
            <div className={s.header}>
                <h2>My profile</h2>
                <button>MEDIUM</button>
            </div>
            <div className={s.main}>
                <div className={s.name}>
                    <div className={s.firstName}>
                        <label htmlFor='name'>First Name</label>
                        <input type='text' id='name'/>
                    </div>
                    <div className={s.lastName}>
                        <label htmlFor='lastname'>Last Name</label>
                        <input type='text' id='lastname'/>
                    </div>
                </div>
                <div className={s.phonePass}>
                    <div className={s.phone}>
                        <label htmlFor='phone'>Phone</label>
                        <input type='text' id='phone'/>
                    </div>
                    <div className={s.pass}>
                        <label htmlFor='pass'>Password</label>
                        <input type='password' id='pass'/>
                    </div>
                </div>
                <div className={s.timezone}>
                    <label htmlFor='timezone'>System timezone</label>
                    <input type='text' id='timezone'/>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
