import {Dispatch} from "redux";
import {Storage} from "../../utils";
import {MAIN_ACTION_TYPE} from "../reducers/main";

export const initStore = () => (dispatch: Dispatch) => {
    dispatch({
        type: MAIN_ACTION_TYPE,
        payload: () => ({...Storage.getItem()})
    })
}
