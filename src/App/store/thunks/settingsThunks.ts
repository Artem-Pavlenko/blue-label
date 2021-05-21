import {Dispatch} from 'redux'
import {countriesAPI} from '../../api/countries-API'
import {setCountries, setSettingFetching} from '../actions/settingActions'


export const getCountries = () => async (dispatch: Dispatch) => {
    dispatch(setSettingFetching(true))
    try {
        const res = await countriesAPI.getCountries()
        if (res) {
            dispatch(setCountries(res))
        }
    } catch (e) {

    } finally {
        dispatch(setSettingFetching(false))
    }
}
