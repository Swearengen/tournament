import { types, flow, getEnv } from "mobx-state-tree";

import { TournamentItemModel } from './TournamentItem';

export const TournamentListModel = types
    .model({
        items: types.optional(types.array(TournamentItemModel), []),
        loading: types.optional(types.boolean, false)
    })
    .views(self => ({
        get tournamentItems() {
            return self.items
        }
    }))
    .actions(self => ({
        add(item: typeof TournamentItemModel.Type) {
            self.items.push(item)
        },
        fetchTournaments: flow(function* loadBooks() {
            console.log('ffafsaaf');
            
            try {                                                                
                self.loading = true
                const json = yield getEnv(self).fetch("http://localhost:3004/items")                            
                self.loading = false
                self.items = json
            } catch (err) {
                console.error("Failed to load books ", err)
            }
        })
    }))