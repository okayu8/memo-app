import * as App from '../constants/App';

export function addTodo(name, dueTo) {
    return {
        type: App.ADD_TODO,
        todo: { name, dueTo },
    };
}

export function delTodo(id) {
    return {
        type: App.DEL_TODO,
        id,
    };
}

export function changeDidFlag(id, flag) {
    return {
        type: App.DEL_TODO,
        id,
        flag,
    };
}