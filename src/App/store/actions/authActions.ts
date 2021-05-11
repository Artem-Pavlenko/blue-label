import {SET_AUTH} from '../constants/authConstants'
import {AuthDataType} from '../../types/authTypes'


export const setAuth = (auth: AuthDataType & { auth: boolean }) => ({type: SET_AUTH, payload: auth} as const)
