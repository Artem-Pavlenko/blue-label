import {ComponentType} from 'react'
import Login from '../pages/Login/Login'
import Dashboard from "../pages/Dashboard/Dashboard";


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
    }
]
