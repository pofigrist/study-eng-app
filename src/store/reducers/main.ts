import {IField} from "./types";

export interface IState {
    fields: IField[]
}

const initialState: IState = {
    fields: []
}

interface IAction {
    type: string;
    payload: <T>(state: T) => T;
}

interface IReducer {
    (arg1: IState, arg2: IAction): IState;
}

export const MAIN_ACTION_TYPE: string = 'MAIN_ACTION_TYPE'

export const mainReducer: IReducer = (state = initialState, { type, payload }) => {
    if (typeof payload === 'function' && type == MAIN_ACTION_TYPE) state = payload(state)
    return state
}
