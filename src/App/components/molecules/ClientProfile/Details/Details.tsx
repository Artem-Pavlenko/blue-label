import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../../../store/store'
import {SettingRootType} from '../../../../types/settingsTypes'
import Input from '../../../atoms/Tags/Input/Input'
import PinnedNote from '../../../atoms/ClientProfile/PinnedNote/PinnedNote'
import DropDawnList from '../../../atoms/Tags/DropDawnList/DropDawnList'
import {getCountries} from '../../../../store/thunks/settingsThunks'
import s from './Details.module.scss'
import './Details.scss'


const Details = () => {
    const dispatch = useDispatch()
    const {countries} = useSelector<StateType, SettingRootType>(state => state.setting)

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])
    return (
        <div className={`${s.details} details`}>
            <div className={s.blockA}>
                <div className={s.userDataA}>
                    <Input label='First Name'/>
                    <Input label='Email'/>
                    <Input className='street' label='Street'/>
                    <Input className='city' label='City'/>
                    <Input className='code' label='Postal Code'/>
                    <DropDawnList className='country' items={countries} label='Country'/>
                </div>
                <div className={s.affiliateInfo}>
                    <h3>Affiliate Info</h3>
                    <div className={s.fieldsBlock}>
                        <Input className='affiliate' label='Affiliate'/>
                        <Input label='Sub Affiliate'/>
                    </div>
                </div>
            </div>
            <div className={s.blockB}>
                <div className={s.userDataB}>
                    <Input label='Last Name'/>
                    <Input label='Password' type='password'/>
                    <Input label='Last Name'/>
                    <Input className='phone' label='Phone'/>
                    <Input className='skype' label='Skype'/>
                </div>
                <div className={s.customFields}>
                    <Input label='Source'/>
                    <Input label='Creative'/>
                    <Input className='affiliate1' label='Affiliate Custom Field 1'/>
                    <Input className='affiliate2' label='Affiliate Custom Field 2'/>
                    <button>SAVE</button>
                </div>
                <PinnedNote/>
            </div>
        </div>
    )
}

export default Details
