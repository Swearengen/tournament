import * as React from 'react';

import './match.css'

import playerImg2 from '../../assets/boleli.jpg'
import playerImg1 from '../../assets/nadal.jpg'

class Match extends React.Component<{}, {}> {

	public render () {
        return (
            <div className='match'>
                <div className='match__row bottomless winner d-inline-flex align-items-stretch'>
                    <div className='match__players-box'>
                        <img className='match__player-image' src={playerImg1} />
                        <p className='match__player-name'>
                            <strong>Player name</strong>
                            <span className='match__player-ranking'>(1)</span>
                        </p>
                    </div>

                    <div className='match__score-box'>
                        <span>6</span>
                    </div>

                    <div className='match__score-box'>
                        <span>2</span>
                    </div>

                    <div className='match__score-box'>
                        <span>7 <sub>(7)</sub></span>
                    </div>
                </div>                

                <div className='match__row   d-inline-flex align-items-stretch'>
                    <div className='match__players-box'>
                        <img className='match__player-image' src={playerImg2} />
                        <p className='match__player-name'>
                            <strong>Player name</strong>
                            <span className='match__player-ranking'>(1)</span>
                        </p>
                    </div>

                    <div className='match__score-box'>
                        <span>3</span>
                    </div>

                    <div className='match__score-box'>
                        <span>6</span>
                    </div>

                    <div className='match__score-box'>
                        <span>6 <sub>(3)</sub></span>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Match