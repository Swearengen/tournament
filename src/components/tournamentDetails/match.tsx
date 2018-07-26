import * as React from 'react';

import { Match as MatchType, Player } from '../../models/itemMock'
import './match.css'

interface Props {
    match: MatchType
}

class Match extends React.Component<Props, {}> {    

	public render () {    
        const { player1, player2 } = this.props.match    

        return (
            <div className='match'>
                <div className={`
                    match__row 
                    bottomless 
                    d-inline-flex 
                    align-items-stretch
                    ${player1.isWinner ? 'winner' : ''}
                `}>
                    {this.renderPlayerBox(player1)}

                    {this.renderPlayerSets(player1)}
                </div>                

                <div className={`
                    match__row 
                    d-inline-flex 
                    align-items-stretch
                    ${player2.isWinner ? 'winner' : ''}
                `}>
                    {this.renderPlayerBox(player2)}

                    {this.renderPlayerSets(player2)}
                </div>                
            </div>
        )
    }

    private renderPlayerBox(player: Player) {
        return (
            <div className='match__players-box'>
                <img className='match__player-image' src={player.playerImg} />
                <p className='match__player-name'>
                    <strong>{player.name}</strong>
                    {player.ranking && 
                        <span className='match__player-ranking'>({player.ranking})</span>
                    }
                </p>
            </div>
        )
    }

    private renderPlayerSets(player: Player) {
        return (
            player.sets.map((set, index) =>
                <div key={`${player.name}-set${index}`} className='match__score-box'>                            
                    <span>
                        {set.score}
                        {set.tieBreakScore && 
                            <sub>{` (${set.tieBreakScore})`}</sub>
                        }
                    </span>                            
                </div>
            )
        )
    }
}

export default Match