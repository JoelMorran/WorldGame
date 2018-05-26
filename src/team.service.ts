import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/operators/map';
import { LastGame } from '../src/app/last-game'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'true, Origin, X-Requested-With, Content-Type, Accept, origin, authorization, client-security-token' ,
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, HEAD'
  })
};

let headers = new HttpHeaders().set('X-Auth-Token', 'e0c7693a8b2f4529b4f2ba779d64ab4a'); 

@Injectable()
export class TeamService {

private teamsUrl = 'http://api.football-data.org/v1';

  constructor(private http: HttpClient) { }


/** GET teams from the server */
getLastGame(): Observable<LastGame[]> {
  return this.http.get<LastGame[]>(this.teamsUrl +
     '/teams/445/fixtures', {headers});

}

getAllPlayers(): Observable<any[]> {
  return this.http.get<any[]>(this.teamsUrl +
     '/teams/445/players', {headers});

}

getCompetitions(): Observable<any[]> {
  return this.http.get<any[]>(this.teamsUrl +
     '/competitions/459/teams/', {headers});

}

getHeadToHead(): Observable<any[]> {
  return this.http.get<any[]>(this.teamsUrl +
     '', {headers});

}

getLeagueTable(): Observable<any[]> {
  return this.http.get<any[]>(this.teamsUrl +
     '/competitions/459/leagueTable', {headers});

}

getMyTeam(): Observable<any[]> {
  return this.http.get<any[]>(this.teamsUrl +
     '/teams/445', {headers});

}

getPerformance(): Observable<any[]> {
  return this.http.get<any[]>(this.teamsUrl +
     '/teams/445/fixtures?timeFrame=p5', {headers});

}

getSeason(): Observable<any[]> {
  return this.http.get<any[]>(this.teamsUrl +
     '/teams/445/fixtures?season=2017', {headers});

}

/*getLeagueTable(){
  return this.http.get<Team[]>(this.teamsUrl+'whatever';
}*/

}