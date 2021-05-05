import {INITIALIZE_APP} from '../constants/appConstants'


export const setInitializeApp = (status: boolean) => ({type: INITIALIZE_APP, status} as const)
