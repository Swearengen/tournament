import { types, flow, getEnv } from "mobx-state-tree"

import { Round, RoundSchemaItem } from './types'

export const SelectedTournamentModel = types
	.model({
		loading: types.optional(types.boolean, false),		
		selectedRound: types.optional(types.number, 1),
		columnsToShow: types.optional(types.number, 3),

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

		function setColumnsToShow(width: number) {									
			if (width < 767) {
				self.columnsToShow = 1
			} else if (width >= 768 && width < 1200) {
				self.columnsToShow = 2
			} else {
				self.columnsToShow = 3
			}
		}

		function setModelData({ id, name, location, dateTime, rounds }: typeof SelectedTournamentModel.Type) {
			self.id = id
			self.name = name
			self.location = location
			self.dateTime = dateTime
			self.rounds = rounds
		}

		function setSelectedRound(roundNum: number) {
			self.selectedRound = roundNum
		}

		return {
			fetchRounds,
			setColumnsToShow,
			setSelectedRound
		}
	})
	.views(self => ({
		get roundItems() {
			if (self.rounds && self.columnsToShow === 1) {
				return self.rounds.filter((round: Round) => {
					return round.roundNumber === self.selectedRound
				})
			} 

			if (self.rounds) {
				if (self.rounds.length - (self.selectedRound - 1) >= self.columnsToShow) {					
					// case when it is not last n columns
					// so I can take roundNumber === selectedCoumn i jos slectedColumn + 1 or selectedColumn + 2 
					return self.rounds.filter((round: Round) => {						
						return round.roundNumber === 1 || round.roundNumber === 2 || round.roundNumber || 3
					})
				} else {
					// u zadnjih columnsToShow roundi se nalazim i treba uzet tih zadnjih columnsToShow roundi
				}
			}

			return []			
		},

		get roundsSchemaItems():RoundSchemaItem[]  {

			// todo: compute round schema items
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
