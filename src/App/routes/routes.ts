import {ComponentType} from 'react'
import Login from '../pages/Login/Login'


type Page = {
    path: string
    Component?: ComponentType
}

export const pages: Array<Page> = [{
    path: '/',
    Component: Login
}]
