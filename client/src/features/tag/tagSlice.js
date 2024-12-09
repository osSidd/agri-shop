const initialState = []

export default function tagReducer(state=initialState, action){
    switch(action.type){
        case 'tags/ADD_TAG':
            return [...state, action.payload]
        case 'tags/SET_ALL_TAGS':
            return {
                tags: action.payload.map(tag => ({...tag, edit: false, selected: false}))
            }
        case 'tags/EDIT_TAG':
            return {
                tags: state.tags.map(tag => ({
                    ...tag, 
                    edit: tag._id === action.payload ? !tag.edit : tag.edit
                }))
            }
        case 'tags/DELETE_TAG':
            return {
                tags: state.tags.filter(item => item._id !== action.payload)
            }
        case 'tags/EDIT_TAG_VALUE':
            return {
                tags: state.tags.map(item => ({
                    ...item,
                    name: item._id === action.payload.id ? action.payload.value : item.name,
                }))
            }
        case 'tags/UPDATE_TAG':
            return {
                tags: state.tags.map(item => {
                    return item._id === action.payload.id ? action.payload.data : item
                })
            }
        case 'tags/SELECT_A_TAG':
            return {
                tags: state.tags.map(item => ({
                    ...item,
                    selected: item._id === action.payload ? !item.selected : item.selected
                }))
            }
        default:
            return state
    }
}