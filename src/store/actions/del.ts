import {Dispatch} from "redux";
import {Id} from "../index";

export const createDelFieldAction = (id: Id) => (dispatch: Dispatch) => {
    dispatch({
        type: 'DEL',
        payload: {id}
    })
};
