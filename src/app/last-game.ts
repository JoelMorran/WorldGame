import { Result } from '../app/result'


export class LastGame {

    constructor(
        public date: Date,
        public matchDay: string, 
        public status: string, 
        public homeTeamName: number, 
        public awayTeamName: number, 
        public result: Result 
       ) {}
    
    }
    