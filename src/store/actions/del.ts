import {Dispatch} from "redux";
import {Id} from "../index";
import {IField} from "../reducers/types";
import {IState, MAIN_ACTION_TYPE} from "../reducers/main";

export const createDelFieldAction = (itemId: Id) => (dispatch: Dispatch) => {
    dispatch({
        type: MAIN_ACTION_TYPE,
        payload: (state: IState) => ({fields: state.fields.filter(({ id }:IField) => id !== itemId)})
    })
};
