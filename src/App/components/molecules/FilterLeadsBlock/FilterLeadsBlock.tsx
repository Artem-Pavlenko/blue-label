import React, {useState} from 'react'
import SearchInput from "../../atoms/Tags/SearchInput/SearchInput";
import s from './FilterLeadsBlock.module.scss'



const FilterLeadsBlock: React.FC = () => {
    const [value, setValue] = useState('')

    return (
        <div className={s.filterLeads}>
            <SearchInput placeholder='Filter by ID/Name/Email...' value={value} onChange={setValue} onSearch={() => {}} />
            <button>MASS ACTIONS</button>
            <button>UPDATE STATUS</button>
            <button>ASSIGN OWNER</button>
            <button>ASSIGN MANAGER</button>
            <button>ASSIGN DESK</button>
            <button>CLEAR ALL FILTERS (0)</button>
        </div>
    )
}

export default FilterLeadsBlock
