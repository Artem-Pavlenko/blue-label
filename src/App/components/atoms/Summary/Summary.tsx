import React from 'react'
import './Summary.scss'

export type SummaryType = {
    totalCount?: number
    selectedCount?: number
}

const Summary: React.FC<SummaryType> = ({selectedCount = 0, totalCount = 0}) => {
    return (
        <div className='summary'>
            <p>Summary</p>
            <div className='total'>
                <span className='title'>Total</span>
                <span className='count'>{totalCount}</span>
            </div>
            <div className='selected'>
                <span className='title'>Selected</span>
                <span className='count'>{selectedCount}</span>
            </div>
        </div>
    )
}

export default Summary
