export interface Round {
    roundNumber: number;
    roundName: string;
    matches: Match[][];
}

export interface Match {
    player1: Player;
    player2: Player;
}

export interface Player {
    name: string;
    ranking?: number;
    playerImg?: string;
    isWinner?: boolean;
    sets: Set[];
}

export interface Set {
    score: string;    
    tieBreakScore?: string;
}