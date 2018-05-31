import { Home } from '../app/home'
import { Away } from '../app/away'


export class LeagueTable {

    constructor(
        public position: string,
        public teamName: string, 
        public crestURI: string, 
        public playedGames: string, 
        public points: string, 
        public goals: string,
        public goalsAgainst: string,
        public goalDifference: string,
        public wins: string, 
        public draws: string, 
        public losses: string, 
        public home: Home,
        public away: Away

       ) {}
    
    }