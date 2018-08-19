import * as React from 'react';
import cc from "classcat"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Match as MatchType, Player } from '../../models/types'
import './match.css'

interface Props {
    match: MatchType
}

export const Match: React.SFC<Props> = (props) => {

    const { player1, player2 } = props.match    

    const renderPlayerBox = (player: Player) => {
        return (
            <div className='match__players-box'>
                {player.playerImg ? (
                    <img className='match__player-image' src={player.playerImg} />
                ) : (
                    <span className='match__palyer-image-placeholder'>
                        <FontAwesomeIcon icon="user" />
                    </span>
                )}
                <p className='match__player-name'>
                    <strong>{player.name}</strong>
                    {player.ranking && 
                        <span className='match__player-ranking'>({player.ranking})</span>
                    }
                </p>
            </div>
        )
    }

    const renderPlayerSets = (player: Player) => {
        return (
            player.sets.map((set, index) =>
                <div key={`${player.name}-set${index}`} className='match__score-box'>                            
                    <span>
                        {set.score}
                        {set.tieBreakScore && 
                            <sub>{`(${set.tieBreakScore})`}</sub>
                        }
                    </span>                            
                </div>
            )
        )
    }   

    return (
        <div className='match'>
            <div className={cc([
                'match__row',
                'bottomless',                    
                { winner: player1.isWinner }
            ])}>
                {renderPlayerBox(player1)}

                {renderPlayerSets(player1)}
            </div>                

            <div className={cc([
                'match__row',                    
                { winner: player2.isWinner }
            ])}>
                {renderPlayerBox(player2)}

                {renderPlayerSets(player2)}
            </div>                
        </div>
    )
}

export default Match