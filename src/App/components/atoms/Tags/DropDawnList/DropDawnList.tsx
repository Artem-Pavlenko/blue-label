import React, {useRef, useState} from 'react'
import {useOutsideListener} from '../../../../hooks/useOutsideListener'
import arrowImg from '../../../../assets/images/icons/arrow_down_color.svg'
import './DropDawnList.scss'

export type DropDawnListItem = {
    value: string
    icon?: string
}

type DropDownListType = {
    items: Array<DropDawnListItem>
    className?: string
    defaultValue?: number | string
    label?: string
}

const DropDawnList: React.FC<DropDownListType> = ({items, className, defaultValue, label}) => {
    const [checked, setChecked] = useState<DropDawnListItem | null>(null)
    const [showList, setShowList] = useState<boolean>(false)
    const listRef = useRef<HTMLDivElement>(null)
    const hideList = () => setShowList(false)
    useOutsideListener(listRef, hideList)

    const showListHandler = () => setShowList((prevState => !prevState))
    const onChangeChecked = (item: DropDawnListItem) => {
        setChecked(item)
        hideList()
    }
    const isCheckedItem = (item: DropDawnListItem, index: number) => {
        if (!checked) {
            if (index === 0) {
                return 'checked'
            }
        } else if (checked?.value === item.value) {
            return 'checked'
        }

    }

    return (
        <div ref={listRef} className={`dropDawnListBlock ${className}`}>
            {label && <p>{label}</p>}
            <div className='checkedBlock' onClick={showListHandler}>
                {
                    checked
                        ? <div className='checked'>{checked?.value}</div>
                        : <div className='checked'>{items[0]?.value}</div>
                }
                <img className={`${showList ? 'arrow active' : 'arrow'}`} src={arrowImg} alt=''/>
            </div>
            {
                showList &&
                <ul className='dropDawnList'>
                    {
                        items.map((item, index) =>
                            <li
                                className={isCheckedItem(item, index)}
                                key={item.value}
                                onClick={() => onChangeChecked(item)}
                                value={item.value}>
                                {item?.icon && <img src={item.icon} alt=''/> }
                                {item.value}
                            </li>)
                    }
                </ul>
            }
        </div>
    )
}

export default DropDawnList
