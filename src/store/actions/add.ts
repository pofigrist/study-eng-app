import {Dispatch} from "redux";

export const createAddFieldAction = (field: string) => {
    return (dispatch: Dispatch) => {
        console.log(field)
        dispatch({
            type: 'ADD',
            payload: {
                id: String(Math.random()),
                value: field
            }
        })
    };
}
