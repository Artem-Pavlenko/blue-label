import {SET_COUNTRIES, SET_SETTING_FETCHING} from "../constants/settingConstants";

export const setCountries = (countries: any[]) => ({type: SET_COUNTRIES, countries} as const)
export const setSettingFetching = (isFetch: boolean) => ({type: SET_SETTING_FETCHING, isFetch} as const)
