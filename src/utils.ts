import _ from 'lodash'

const store = {
    default: {
        timestamp: new Date(),
        fields: Array(10).fill(null)
    }
}

store.default.fields = store.default.fields.map((field, id) => ({
    id: String(id),
    value: String(id),
    translate: String(id),
    created: new Date(),
    image: null,
    comments: [{
        title: 'title',
        content: 'value',
        author: 'author',
        date: new Date()
    },{
        title: 'title2',
        content: 'value2',
        author: 'author2',
        date: new Date()
    }],
    completesTimes: Math.floor(id * Math.random()*10),
    lastCompleted: new Date(),
    lastFailed: null,
    booked: false,
    categories: ['base']
}))

export const Storage = {
    getItem() {
        return store.default
    },
    setItem(value: any, path: string | Array<string>) {
        return _.set(store.default, path, value)
    }
}
