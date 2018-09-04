import { types, flow, getEnv } from "mobx-state-tree"

const TournamentItemModel = types
	.model({
		id: types.identifier,
		name: types.string,
		location: types.string,
		dateTime: types.string,
	})

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
		fetchTournaments: flow(function* load(resource: string, url: string, params: any = {}) {
			try {
				self.loading = true
				const items = yield getEnv(self).fetcher().get(resource, url, params)								
				self.loading = false
				self.tournaments = items
			} catch (err) {
				console.error("Failed to load books ", err)
				throw err
			}
		}),
	}))
