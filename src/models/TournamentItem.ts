import { types } from "mobx-state-tree";

export const TournamentItemModel = types
    .model({
        id: types.identifier,
        name: types.string,
        location: types.string,
        dateTime: types.Date,
        rounds: types.optional(types.frozen(), [])
    })
    .actions(self => ({
        changeName(newName: string) {
            self.name = newName
        }
    }))