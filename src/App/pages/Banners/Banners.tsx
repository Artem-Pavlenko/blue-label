import React from 'react'
import BannersList from '../../components/molecules/BannersList/BannersList'
import download from '../../assets/images/icons/download_file.svg'
import  s from './Banners.module.scss'


const Banners = () => {
    return (
        <div className={s.banners}>
            <div className={s.bannersFilter}>
                <div>
                    <span>Manage Users Campaigns</span>
                    <div className={s.imgWrapper}>
                        <img src={download} alt=''/>
                    </div>
                </div>
                <button>CLEAR ALL FILTERS (0)</button>
            </div>
            <BannersList/>
        </div>
    )
}

export default Banners
