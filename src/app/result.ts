import { HalfTime } from '../app/half-time'
import { Odds } from '../app/odds'

export class Result {

    constructor(
        public goalsHomeTeam: string, 
        public goalsAwayTeam: string,
        public halfTime: HalfTime,
        public odds: Odds) {}
    
    }