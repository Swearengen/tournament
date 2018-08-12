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
	.actions(self => {
		const fetchRounds = flow(function* load(tournamentId: string) {
			try {
				self.loading = true
				const data = yield getEnv(self).fetch(`http://localhost:3004/tournaments/${tournamentId}?_embed=rounds`)
				setModelData(data)				

				self.loading = false
			} catch (err) {
				console.error("Failed to load books ", err)
			}
		});

		function setModelData({ id, name, location, dateTime, rounds }: typeof SelectedTournamentModel.Type) {
			self.id = id
			self.name = name
			self.location = location
			self.dateTime = dateTime
			self.rounds = rounds
		}

		return {
			fetchRounds,
			// setWindowWidth
		}
	})
	.views(self => ({
		get roundItems() {
			return self.rounds
		}
	}))
