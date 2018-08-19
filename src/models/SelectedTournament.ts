import { types, flow, getEnv } from "mobx-state-tree"

import { Round, RoundSchemaItem } from './types'

export const SelectedTournamentModel = types
	.model({
		loading: types.optional(types.boolean, false),
		windowWidth: types.number,

		id: types.optional(types.string, ''),
		name: types.optional(types.string, ''),
		location: types.optional(types.string, ''),
		dateTime: types.optional(types.string, ''),
		rounds: types.optional(types.frozen(), []),
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

		function setWindowWidth(width: number) {						
			self.windowWidth = width
		}

		function setModelData({ id, name, location, dateTime, rounds }: typeof SelectedTournamentModel.Type) {
			self.id = id
			self.name = name
			self.location = location
			self.dateTime = dateTime
			self.rounds = rounds
		}

		return {
			fetchRounds,
			setWindowWidth
		}
	})
	.views(self => ({
		get roundItems() {
			if (self.rounds && self.windowWidth < 767) {								
				return self.rounds.filter((round: Round) => {
					return round.roundNumber === 1
				})
			} else if (self.rounds && self.windowWidth >= 768 && self.windowWidth < 1200) {								
				return self.rounds.filter((round: Round) => {
					return round.roundNumber === 1 || round.roundNumber === 2
				})
			} else {								
				return self.rounds
					? self.rounds.filter((round: Round) => {
						return round.roundNumber === 1 || round.roundNumber === 2  || round.roundNumber === 3
					})
					: []
			}
		},

		get roundsSchemaItems():RoundSchemaItem[]  {
			return [
				{
					roundName: 'round 1',
					roundNumber: 1,
					matchesNumber: 8,
					selected: true,
				}, {					
					roundName: 'quarter final',
					roundNumber: 2,
					matchesNumber: 4,
					selected: false,
				}, {
					roundName: 'semi final',
					roundNumber: 3,
					matchesNumber: 2,
					selected: false,
				}, {
					roundName: 'Finale',
					roundNumber: 4,
					matchesNumber: 1,
					selected: false,
				}
			]
		}
	}))
