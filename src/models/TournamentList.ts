import { types, flow, getEnv } from "mobx-state-tree"

import { TournamentItemModel } from './TournamentItem'

export const TournamentListModel = types
    .model({
        tournaments: types.optional(types.array(TournamentItemModel), []),
        loading: types.optional(types.boolean, false)
    })
    .views(self => ({
        get tournamentItems() {
            return self.tournaments
        }
    }))
    .actions(self => ({        
        fetchTournaments: flow(function* load() {            
            try {                                                                
                self.loading = true
                const items = yield getEnv(self).fetch("http://localhost:3004/tournaments")                      
                self.loading = false                                
                self.tournaments = items
            } catch (err) {
                console.error("Failed to load books ", err)
            }
        })
    }))