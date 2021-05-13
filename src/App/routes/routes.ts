import {ComponentType} from 'react'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import Leads from '../pages/Leads/Leads'


type Page = {
    path: string
    Component?: ComponentType
}

export const pages: Array<Page> = [
    {
        path: '/',
        Component: Login
    },
    {
        path: '/dashboard',
        Component: Dashboard
    },
    {
        path: '/leads',
        Component: Leads
    }
]
