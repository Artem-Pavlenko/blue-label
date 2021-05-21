import axios from 'axios'


export const countriesAPI = {
    getCountries: () => {
        return axios.get('https://restcountries.eu/rest/v2/all').then(res => res.data)
    }
}
