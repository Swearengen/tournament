import playerImg2 from '../assets/boleli.jpg'
import playerImg1 from '../assets/nadal.jpg'

export interface Tournament {
    name: string;
    rounds: Round[];
}

interface Round {
    roundNumber: number;
    matches: Match[];
}

export interface Match {
    player1: Player;
    player2: Player;
}

export interface Player {
    name: string;
    ranking?: number;
    playerImg: string;
    isWinner?: boolean;
    sets: Set[];
}

export interface Set {
    score: number;    
    tieBreakScore?: number;
}

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
                                score: 6
                            },
                            {
                                score: 3                                
                            },
                            {
                                score: 7,                                
                                tieBreakScore: 7
                            }
                        ]
                    },
                    player2: {
                        name: "Simone Bolelli",                        
                        playerImg: playerImg2,                        
                        sets: [
                            {
                                score: 3                                
                            },
                            {
                                score: 6                                
                            },
                            {
                                score: 6,                                
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
                                score: 3
                            },
                            {
                                score: 2
                            }                            
                        ]
                    },
                    player2: {
                        name: "Fabio Fognini",                        
                        playerImg: playerImg2, 
                        isWinner: true,                       
                        sets: [
                            {
                                score: 6
                            },
                            {
                                score: 6
                            }
                        ]
                    }
                }
            ]
        }
    ]
} as Tournament
