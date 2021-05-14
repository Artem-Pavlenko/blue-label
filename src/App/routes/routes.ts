import {ComponentType} from 'react'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import Leads from '../pages/Leads/Leads'
import Clients from "../pages/Clients/Clients";
import Documents from "../pages/Documents/Documents";


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
    },
    {
        path: '/clients',
        Component: Clients
    },
    {
        path: '/documents',
        Component: Documents
    }
]
