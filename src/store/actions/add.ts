import {Dispatch} from "redux";

export const createAddFieldAction = (field: string, translate: string) => (dispatch: Dispatch) => {
    dispatch({
        type: 'ADD',
        payload: {
            id: String(Math.random()),
            value: field,
            translate
        }
    })
};
