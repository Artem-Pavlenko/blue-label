import {AuthStateType} from '../../types/authTypes'


const initialState: AuthStateType = {
    auth: false,
    email: "",
    name: "",
    lastname: ""
}


export const authReducer = (state = initialState, action: Actions): AuthStateType => {
    switch (action.type) {
        default:
            return state
    }
}


type Actions = any
