import { types, flow, getEnv } from "mobx-state-tree";

export const SelectedTournamentModel = types
	.model({
		loading: types.optional(types.boolean, false),

		id: types.optional(types.string, ''),
		name: types.optional(types.string, ''),
		location: types.optional(types.string, ''),
		dateTime: types.optional(types.string, ''),
		rounds: types.optional(types.frozen(), [])
	})
	.actions(self => ({
		fetchRounds: flow(function* load(tournamentId: string) {
			try {
				self.loading = true
				const data = yield getEnv(self).fetch(`http://localhost:3004/tournaments/${tournamentId}?_embed=rounds`)
				// self.setModelData(data)

				self.id = data.id
				self.name = data.name
				self.location = data.location
				self.dateTime = data.dateTime
				self.rounds = data.rounds

				self.loading = false
			} catch (err) {
				console.error("Failed to load books ", err)
			}
		}),
		// setModelData({ id, name, location, dateTime, rounds }: ModelData) {
		// 	self.id = id
		// 	self.name = name
		// 	self.location = location
		// 	self.dateTime = dateTime
		// 	self.rounds = rounds
		// }
	}))
