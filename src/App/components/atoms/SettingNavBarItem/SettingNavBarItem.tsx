import React from 'react'
import cn from 'classnames'
import s from './SettingNavBarItem.module.scss'

type SettingItem = {
    value: string
    onClick: (value: string) => void
    active: string
}

const SettingNavBarItem: React.FC<SettingItem> = ({value, onClick, active}) => {
    return (
        <div onClick={() => onClick(value)} className={cn(s.item, {[s.active]: active === value})}>
            {value}
        </div>
    )
}

export default SettingNavBarItem
