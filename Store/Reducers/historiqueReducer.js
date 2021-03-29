const initialState = {id: 0,historique: []}

const historiqueReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'HISTORY':
            return {
                ...state,
                historique: [...state.historique, {id: state.id, ...action.value}],
                id: state.id+1
            }
        default:
            return state
    }
}
export default historiqueReducer