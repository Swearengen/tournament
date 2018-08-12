import { TournamentListModel } from './models/TournamentList'
import { SelectedTournamentModel } from './models/SelectedTournament'

const fetcher = (url: string) => window.fetch(url).then(response => response.json())

export const store = {
	tournamentList: TournamentListModel.create({}, { fetch: fetcher }),
	selectedTournament: SelectedTournamentModel.create({windowWidth: window.screen.width}, { fetch: fetcher })
}

export default store
