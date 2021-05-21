import {SettingRootType} from "../../types/settingsTypes";
import {setCountries, setSettingFetching} from "../actions/settingActions";


const initialState: SettingRootType = {
    countries: [],
    fetching: false
}

export const settingsReducer = (state = initialState, action: Actions): SettingRootType => {
    switch (action.type) {
        case "SET_COUNTRIES":
            return {...state, countries: action.countries.map(c => ({value: c.name}))}
        case "SET_SETTING_FETCHING":
            return {...state, fetching: action.isFetch}
        default:
            return state
    }
}

type Actions = ReturnType<typeof setSettingFetching> | ReturnType<typeof setCountries>
