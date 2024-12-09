const initialState = {
    user: '',
    avatar: ''
}

export default function userReducer(state=initialState, action){
    switch(action.type){
        case 'user/USER_LOG_IN':
            return {
                user: action.payload.user,
                avatar: action.payload.avatar,
            }
        case 'user/USER_LOG_OUT':
            return {
                user: '',
                avatar: '',
            }
        default:
            return state
    }
}