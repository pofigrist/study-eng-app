import {IField} from "./types";

export interface IState {
    fields: IField[]
}

const initialState: IState = {
    fields: []
}

interface IAction {
    type: string;
    payload: any;
}

type TReducer = (arg1: IState, arg2: IAction) => IState;

export const mainReducer: TReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD':
            return {...state, fields: [...state.fields, payload]}
        case 'DEL':
            return {fields: state.fields.filter(({ id }:IField) => id !== payload.id)}
        case 'FETCH_STATE':
            return { ...payload}
        default:
            return state
    }
}

