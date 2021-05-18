import React from 'react'
import BannerListHeader from '../../atoms/BannerListHeader/BannerListHeader'
import ListFooter from '../ListFooter/ListFooter'
import BannerItem, {Banner} from '../../atoms/BannerItem/BannerItem'
import s from './BannersList.module.scss'


const BannersList = () => {
    const banners: Banner[] = [
        {
            ID: '56021',
            userName: 'Uwe Se ibold',
            userID: '56021',
            userInvest: '443,25 €',
            category: 'Electronics',
            marketplaceID: '77010',
            name: 'gui2',
            runningFor: '3 Days',
            totalPeriod: '3 Days'
        },
        {
            ID: '56022',
            userName: 'Uwe Se ibold',
            userID: '56021',
            userInvest: '443,25 €',
            category: 'Electronics',
            marketplaceID: '77010',
            name: 'gui2',
            runningFor: '3 Days',
            totalPeriod: '3 Days'
        },
        {
            ID: '56023',
            userName: 'Uwe Se ibold',
            userID: '56021',
            userInvest: '443,25 €',
            category: 'Electronics',
            marketplaceID: '77010',
            name: 'gui2',
            runningFor: '3 Days',
            totalPeriod: '3 Days'
        },
        {
            ID: '56024',
            userName: 'Uwe Se ibold',
            userID: '56021',
            userInvest: '443,25 €',
            category: 'Electronics',
            marketplaceID: '77010',
            name: 'gui2',
            runningFor: '3 Days',
            totalPeriod: '3 Days'
        },
        {
            ID: '56025',
            userName: 'Uwe Se ibold',
            userID: '56021',
            userInvest: '443,25 €',
            category: 'Electronics',
            marketplaceID: '77010',
            name: 'gui2',
            runningFor: '3 Days',
            totalPeriod: '3 Days'
        },
        {
            ID: '56026',
            userName: 'Uwe Se ibold',
            userID: '56021',
            userInvest: '443,25 €',
            category: 'Electronics',
            marketplaceID: '77010',
            name: 'gui2',
            runningFor: '3 Days',
            totalPeriod: '3 Days'
        },
        {
            ID: '56027',
            userName: 'Uwe Se ibold',
            userID: '56021',
            userInvest: '443,25 €',
            category: 'Electronics',
            marketplaceID: '77010',
            name: 'gui2',
            runningFor: '3 Days',
            totalPeriod: '3 Days'
        },
        {
            ID: '56028',
            userName: 'Uwe Se ibold',
            userID: '56021',
            userInvest: '443,25 €',
            category: 'Electronics',
            marketplaceID: '77010',
            name: 'gui2',
            runningFor: '3 Days',
            totalPeriod: '3 Days'
        },
    ]

    return (
        <div className={s.bannersList}>
            <BannerListHeader/>
            {banners.map(b => <BannerItem key={b.ID} {...b} />)}
            <ListFooter totalCount={196}/>
        </div>
    )
}

export default BannersList
