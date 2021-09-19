import {Dispatch} from "redux";
import {IState, MAIN_ACTION_TYPE} from "../reducers/main";

export const addNewField = (field: string, translate: string) => (dispatch: Dispatch) => {
    const newField = {
        id: String(Math.random()),
        value: field,
        translate
    }

    dispatch({
        type: MAIN_ACTION_TYPE,
        payload: (state: IState) => ({...state, fields: [...state.fields, newField]})
    })
};
