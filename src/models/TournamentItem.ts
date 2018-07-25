import { types } from "mobx-state-tree";

export const TournamentItemModel = types
    .model({
        name: types.string,
        tournament: types.frozen()
    })
    .actions(self => ({
        changeName(newName: string) {
            self.name = newName
        }
    }))