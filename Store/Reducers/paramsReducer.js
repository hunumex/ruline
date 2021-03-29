
const initialState = {
    theme: ['#000000','#092136', 'gray'],
    comptName: ['Utility', 'Saving', 'Diver'],
    pourcentage: [50,20,30]
}

export default function paramReducer (state = initialState, action) {
    switch(action.type) {
        case 'THEME':
            return {
                ...state, theme: action.value
            }
        case 'COMPTNAME':
            return {
                ...state, comptName: action.value
            }
        case 'POURCENTAGE':
            return {
                ...state, pourcentage: action.value
            }
        default:
            return state
    }
}