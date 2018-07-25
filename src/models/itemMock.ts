import playerImg2 from '../assets/boleli.jpg'
import playerImg1 from '../assets/nadal.jpg'

export const mockedTournament = {
    name: 'tournament 1',
    rounds: [
        {
            roundNumber: 1,
            matches: [
                {
                    player1: {
                        name: "Rafael Nadal",
                        ranking: 1,
                        playerImg: playerImg1,
                        isWinner: true,
                        sets: [
                            {
                                score: 6,
                                isTieBreak: false
                            },
                            {
                                score: 2,
                                isTieBreak: false
                            },
                            {
                                score: 7,
                                isTieBreak: true,
                                tieBreakScore: 7
                            }
                        ]
                    },
                    player2: {
                        name: "Simone Bolelli",                        
                        playerImg: playerImg2,                        
                        sets: [
                            {
                                score: 3,
                                isTieBreak: false
                            },
                            {
                                score: 6,
                                isTieBreak: false
                            },
                            {
                                score: 6,
                                isTieBreak: true,
                                tieBreakScore: 3
                            }
                        ]
                    }
                },

                {
                    player1: {
                        name: "Benoit Paire",
                        ranking: 10,
                        playerImg: playerImg1,                        
                        sets: [
                            {
                                score: 3,
                                isTieBreak: false
                            },
                            {
                                score: 2,
                                isTieBreak: false
                            }                            
                        ]
                    },
                    player2: {
                        name: "Fabio Fognini",                        
                        playerImg: playerImg2, 
                        isWinner: true,                       
                        sets: [
                            {
                                score: 6,
                                isTieBreak: false
                            },
                            {
                                score: 6,
                                isTieBreak: false
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
