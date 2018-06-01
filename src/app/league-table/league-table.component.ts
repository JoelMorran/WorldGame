import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TeamService } from '../../team.service';
import { Home } from '../../app/home';
import { Away } from '../../app/away';
import { LeagueTable } from '../../app/league-table';


@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

    selectedLeagueTable: any;

    leagueTables : LeagueTable[];
  
    constructor(private teamService: TeamService) { }
    //constructor() { }
    
    parseGames(temp){
      this.leagueTables = temp;
      //console.log(temp['fixtures']);
      let x = temp['standing'];
      for(let t of x){
        //console.log(t.date);
        //t.date = new Date(t.date);
        //console.log(t.result['odds']);*/
        console.log("1");
        /*if (t.squadMarketValue != null) {
          console.log(t.squadMarketValue);
          console.log("2");
        }
        else{
          t.squadMarketValue = "N/A";
          console.log("3");
        }
  
        if (t.code != null) {
          console.log(t.code);
          console.log("2");
        }
        else{
          t.code = "N/A";
          console.log("3");
        } 
  
        if (t.shortName != "" || null) { //WTFFFFFFFFFFFFF
          console.log(t.shortName);
          console.log("2");
        }
        else{
          t.shortName = "N/A";
          console.log("3");
        }  
  */
        if (t.crestURI != "" && t.crestURI != null) {
          console.log(t.crestUrl);
          console.log("2");
        }
        else{
          t.crestURI = "https://www.readjunk.com/wp-content/uploads/2015/09/no-image-found1-300x200.png";
          console.log("3");
        }
  
       /* if (t.crestURI != null) { //WTFFFFFFFFFFFFF
          console.log(t.crestURI);
          console.log("2");
        }
        else{
          t.crestURI = "https://www.readjunk.com/wp-content/uploads/2015/09/no-image-found1-300x200.png";
          console.log("3");
        } */
        
      }
       //this.allPlayerss['fixtures']=[x[x.length-1]];
        //console.log(this.allPlayerss)
    }

    getLeagueTable(){
      this.teamService.getLeagueTable().subscribe(temp => this.parseGames(temp),
      err => console.log(err),
      () => console.log());
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