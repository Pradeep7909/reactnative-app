import { ADD_TASK, ADD_TO_CART, REMOVE_FROM_CART } from './constant'

const initalState = [];
export const reducer = (state = initalState, action) => {

    console.log("called reducer....")
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
        case REMOVE_FROM_CART:
            let result = state.filter(item => {
                return item.name != action.data
            })
            return [
                ...result
            ]

        default:
            return state
    }
}