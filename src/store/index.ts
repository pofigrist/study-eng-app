import {combineReducers} from "redux";
import {IState, mainReducer} from "./reducers/main";

export type Id = string;

export interface IStore {
    main: IState
}

export const combinedReducers = combineReducers({
    main: mainReducer
})
