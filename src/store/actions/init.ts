import {Dispatch} from "redux";
import {Storage} from "../../utils";

export const initAction = (dispatch: Dispatch) => {
    dispatch({
        type: 'FETCH_STATE',
        payload: Storage.getItem()
    })
}
