import { HalfTime } from '../app/half-time'


export class Result {

    constructor(
        public goalsHomeTeam: string, 
        public goalsAwayTeam: string,
        public halfTime: HalfTime
       ) {}
    
    }