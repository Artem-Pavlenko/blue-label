import {AuthStateType} from '../../types/authTypes'
import {setAuth} from "../actions/authActions";


const initialState: AuthStateType = {
    auth: true,
    email: "",
    name: "",
    lastname: ""
}


export const authReducer = (state = initialState, action: Actions): AuthStateType => {
    switch (action.type) {
        case "SET_AUTH":
            return {...state, ...action.payload}
        default:
            return state
    }
}


type Actions = ReturnType<typeof setAuth>
