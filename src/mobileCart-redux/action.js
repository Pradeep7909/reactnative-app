import { ADD_TASK, DELETE_TASK, ADD_TO_CART, REMOVE_FROM_CART } from './constant'

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        data: item
    }
};

export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        data: item
    }
};



export function addNewTask(task) {
    return {
        type: ADD_TASK,
        data: task
    }
};


export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        data: id
    }
}