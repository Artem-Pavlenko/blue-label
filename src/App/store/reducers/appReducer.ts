import {setInitializeApp} from '../actions/appActions'

const initialState = {
    status: false
}

type Actions = ReturnType<typeof setInitializeApp>

export const appReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case "INITIALIZE_APP":
            return {...state, status: action.status}
        default :
            return state
    }
}
