import { Result } from '../app/result'
import { Odds } from '../app/odds'


export class LastGame {

    constructor(
        public date: Date,
        public matchDay: string, 
        public status: string, 
        public homeTeamName: number, 
        public awayTeamName: number, 
        public result: Result,
        public odds: Odds

       ) {}
    
    }
    