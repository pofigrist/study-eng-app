import {combineReducers} from "redux";

type Id = string;

export interface IComment {
    title: string
    content: string;
    author: string;
    date: string;
    avatar: null | string;
}

enum Category {
    base = 'base'
}

export interface IField {
    id: Id;
    value: string;
    translate: string;
    created: string;
    image: never;
    comments: IComment[];
    completesTimes: number;
    lastCompleted: string;
    lastFailed: string;
    booked: boolean;
    categories: { [n: number]: Category}
}

interface IState {
    fields: IField[]
}

const initialState: IState = {
    fields: []
}

type IReducer = (arg1: IState, arg2: any) => IState;

const reducer: IReducer = (state = initialState, { type, payload }) => {
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

export interface IStore {
    main: IState
}

export const combinedReducers = combineReducers({
    main: reducer
})
