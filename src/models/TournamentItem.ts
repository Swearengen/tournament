import { types, flow, getEnv } from "mobx-state-tree";

export const TournamentItemModel = types
    .model({
        id: types.identifier,
        name: types.string,
        location: types.string,
        dateTime: types.string,
        loading: types.optional(types.boolean, false),        
        rounds: types.optional(types.frozen(), [])
    })
    .actions(self => ({        
        fetchRounds: flow(function* load(tournamentId: string) {            
            try {                                                                
                self.loading = true
                const json = yield getEnv(self).fetch(`http://localhost:3004/tournaments/${tournamentId}?_embed=rounds`)                      
                self.loading = false                                
                self.rounds = json.rounds
            } catch (err) {
                console.error("Failed to load books ", err)
            }
        })
    }))