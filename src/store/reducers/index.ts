import {combineReducers} from "redux";

type Id = string;

interface IField {
    id: Id;
    value: string;
}

interface IState {
    fields: IField[]
}

interface IAction {
    type: string;
    payload: IField
}

const initialState: IState = {
    fields: []
}

type IReducer = (arg1: IState, arg2: IAction) => IState;

const reducer: IReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD':
            return {...state, fields: [...state.fields, payload]}
        case 'DEL':
            return {fields: state.fields.filter(({ id }:IField) => id !== payload.id)}
        default:
            return state
    }
}

export interface IStore {
    main: IState
}

export const combinedReducers = combineReducers({
    main: reducer
})
