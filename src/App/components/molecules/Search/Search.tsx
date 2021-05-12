import React, {ChangeEvent, useState} from 'react'
import activeSearchIcon from '../../../assets/images/icons/search_active.svg'
import s from './Search.module.scss'


const Search = () => {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState('')

    const showSearchField = () => setShow(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)


    return (
        <div className={s.searchBlock}>
            {!show && <div className={s.search} onClick={showSearchField}/>}
            {
                show &&
                <div className={s.searchField}>
                    <input value={value} onChange={onChangeHandler}/>
                    <img src={activeSearchIcon} alt=""/>
                </div>
            }
        </div>
    )
}

export default Search
