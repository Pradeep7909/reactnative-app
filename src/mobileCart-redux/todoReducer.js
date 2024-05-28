import { ADD_TASK, DELETE_TASK } from './constant'

const initalState = [];
export const todoReducer = (state = initalState, action) => {

    console.log("called reducer....")
    switch (action.type) {
        case ADD_TASK:

            const id = state.length;
            const newTask = {
                ...action.data,
                id: id
            };
            return [
                ...state,
                newTask
            ];

        case DELETE_TASK:

            console.log(`id: ${action.data}`);
            let result = state.filter(task => {
                return task.id != action.data
            })
            return [
                ...result
            ]


        default:
            return state
    }
}