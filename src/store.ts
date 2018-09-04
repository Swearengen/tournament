import { TournamentListModel } from './models/TournamentList'
import { SelectedTournamentModel } from './models/SelectedTournament'
import { API } from "aws-amplify"

const fetcher = () => API

export const store = {
	tournamentList: TournamentListModel.create({}, { fetcher }),
	selectedTournament: SelectedTournamentModel.create({}, { fetcher })
}

export default store
