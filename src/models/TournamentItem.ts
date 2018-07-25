import { types } from "mobx-state-tree";

const test = {
    name: 'dfd',
    id: 'df'
}

interface Test {
    name?: string,
    id?: string
}

export const TournamentItemModel = types
    .model({
        name: types.string,
        something: types.frozen<Test>(test)
    })
    .actions(self => ({
        changeName(newName: string) {
            self.name = newName
        },
    }))