import { types } from "mobx-state-tree";

import { TournamentItemModel } from './TournamentItem';

export const TournamentListModel = types
    .model({
        items: types.optional(types.array(TournamentItemModel), [])
    })
    .actions(self => ({
        add(item: typeof TournamentItemModel.Type) {
            self.items.push(item)
        }
    }))