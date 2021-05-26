import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../../store/store'
import {SettingRootType} from '../../../types/settingsTypes'
import DropDawnList, {DropDawnListItem} from '../../atoms/Tags/DropDawnList/DropDawnList'
import Input from '../../atoms/Tags/Input/Input'
import {getCountries} from '../../../store/thunks/settingsThunks'
import englishIcon from '../../../assets/images/icons/english_icon.svg'
import germanyIcon from '../../../assets/images/icons/germany_icon.svg'
import spainIcon from '../../../assets/images/icons/spain_icon.svg'
import './NewTemplate.scss'


const NewTemplate = () => {
    const dispatch = useDispatch()
    const {countries} = useSelector<StateType, SettingRootType>(state => state.setting)

    const types = [{value: 'New'}, {value: 'MDNB'}, {value: 'Hello'},]
    const languages: DropDawnListItem[] = [
        {value: 'English', icon: englishIcon},
        {value: 'Deutsch', icon: germanyIcon},
        {value: 'Espana', icon: spainIcon}
    ]

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className='newTemplate'>
            <div className='fieldsWrapper'>
                <Input className='long' label='Template Name'/>
                <DropDawnList label='Template Type' defaultValue='Choose Type' className='long' items={types}/>
                <button>SAVE</button>
            </div>
            <div className='fieldsWrapper'>
                <Input className='long' label='Extra content'/>
                <DropDawnList label='System Timezone' className='long' items={countries}/>
                <DropDawnList label='Languages' className='short' items={languages}/>
            </div>
        </div>
    )
}

export default NewTemplate
