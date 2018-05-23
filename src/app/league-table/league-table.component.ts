import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

    selectedLeagueTable: any;

    leagueTables : any[];
  
    constructor(private teamService: TeamService) { }
    //constructor() { }
    
    getLeagueTable(){
      this.teamService.getLeagueTable().subscribe(temp => this.leagueTables = temp);
    }
    ngOnInit() {
      console.log("i'm running!");
      this.getLeagueTable();
     
     // this.support(this.lastGames);
     /*let game = this.lastGames;
     console.log(game);
     for(let i=0; i<game.length; i++){
       game[i].date=new Date(game[i].date);
       if(!game[i].result.halfTime){
         game[i].result.halfTime={goalsHomeTeam:"N/A",goalsAwayTeam:"N/A"};
       }
       if(!game[i].odds){
         game[i].odds={homeWin:"N/A",awayWin:"N/A",draw:"N/A"};
       }
     }
  
     this.lastGames=[game[game.length-1]];
     //console.log(game);*/

  
   /* $.ajax({
      headers: { 'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a' },
      url: 'http://api.football-data.org/v1/competitions/459/leagueTable',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource        
      var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
      //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
      //var teamId = res[1];
      console.log(response);
      
     
    
       
           $.each(response.standing, function(i, f) {
              var tblRow = "<tr>" + "<td>" + f.position + "</td>" + "<td>" + f.teamName + "</td>"  +
          "<td>" + "<img src= " + f.crestURI + " height=100 width=100></img>"+"</td>" + 
          "<td>" + f.playedGames + "</td>" + "<td>" + f.points + "</td>" + "<td>" + f.goals + "</td>" + 
          "<td>" + f.goalsAgainst + "</td>" + "<td>" + f.goalDifference + "</td>" + "<td>" + f.wins + "</td>" + 
          "<td>" + f.draws + "</td>" + "<td>" + f.losses + "</td>" + "<td>" + f.home.goals + "</td>" +
          "<td>" + f.home.goalsAgainst + "</td>" + "<td>" + f.home.wins + "</td>" + "<td>" + f.home.draws + "</td>" +
          "<td>" + f.home.losses + "</td>" + "<td>" + f.away.goals + "</td>" + "<td>" + f.away.goalsAgainst + "</td>" +
          "<td>" + f.away.wins + "</td>" + "<td>" + f.away.draws + "</td>" +"<td>" + f.away.losses + "</td>" + "</tr>"
               $(tblRow).appendTo("#datdata tbody");
         });
    
       
       
    
      
      
      
      
      
      
    }); */
}

}