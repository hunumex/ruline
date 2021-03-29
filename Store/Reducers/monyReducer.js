const initialMony = { totalMoney:0 , utility:0, saving:0, diver:0,}

export default function monyReducer(state = initialMony, action) {
    let nextState
    switch(action.type) {
        case 'ADD':
            return{...state, totalMoney: state.totalMoney + action.value,}

        case 'UTILITY':
            return {
                ...state, utility: state.utility - action.value,
            }

        case 'SAVING':
            return {
                ...state, saving: state.saving - action.value,
            }

        case 'DIVER':
            return {
                ...state, diver: state.diver - action.value,
            }

        case 'DISP':
            return{
                ...state,
                utility: state.utility + disp(state.totalMoney, 50),
                saving: state.saving + disp(state.totalMoney, 20),
                diver: state.diver + disp(state.totalMoney, 30),
                totalMoney: state.totalMoney - state.totalMoney,
            }
        default:
            return state
    }
}

function disp(total, porcentage) {
    return (total*porcentage)/100
}

