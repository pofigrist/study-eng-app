import {Id} from "../index";

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
    categories: { [n: number]: Category }
}
