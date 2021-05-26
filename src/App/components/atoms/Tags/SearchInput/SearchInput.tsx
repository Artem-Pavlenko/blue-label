import React, {ChangeEvent} from 'react'
import './SearchInput.scss'

type SearchInputType = {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    onSearch: () => void
}


const SearchInput: React.FC<SearchInputType> = ({value, onChange, onSearch, placeholder}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)

    return (
        <div className='searchInput'>
            <input placeholder={placeholder} type="text" value={value} onChange={onChangeHandler}/>
            <div className='searchIcon' onClick={onSearch}/>
        </div>
    )
}

export default SearchInput
