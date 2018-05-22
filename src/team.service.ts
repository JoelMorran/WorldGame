import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/operators/map';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'true, Origin, X-Requested-With, Content-Type, Accept, origin, authorization, client-security-token' ,
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, HEAD'
  })
};


@Injectable()
export class TeamService {

   



private teamsUrl = 'http://api.football-data.org/v1';

  constructor(private http: HttpClient) { }


/** GET teams from the server */
getLastGame(): Observable<any[]> {
  return this.http.get<any[]>(this.teamsUrl +
     '/teams/445/fixtures', httpOptions);
}
/*getLeagueTable(){
  return this.http.get<Team[]>(this.teamsUrl+'whatever';
}*/

}