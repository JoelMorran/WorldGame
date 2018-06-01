import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';
import { AllPlayers } from '../all-players'

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {

  selectedAllPlayers: any;

  allPlayerss : AllPlayers[];

  constructor(private teamService: TeamService) { }
  //constructor() { }

  parseGames(temp){
    this.allPlayerss = temp;
    //console.log(temp['fixtures']);
    let x = temp['players'];
    for(let t of x){
      //console.log(t.date);
      //t.date = new Date(t.date);
      //console.log(t.result['odds']);*/
      console.log("1");
      if (t.marketValue != null) {
        console.log(t.marketValue);
        console.log("2");
      }
      else{
        t.marketValue = "N/A";
        console.log("3");
      }

      if (t.jerseyNumber != null) {
        console.log(t.jerseyNumber);
        console.log("2");
      }
      else{
        t.jerseyNumber = "N/A";
        console.log("3");
      } 

      if (t.contractUntil != null) {
        console.log(t.contractUntil);
        console.log("2");
      }
      else{
        t.contractUntil = "N/A";
        console.log("3");
      }  
      
    }
     //this.allPlayerss['fixtures']=[x[x.length-1]];
      //console.log(this.allPlayerss)
  }
 
  
  getAllPlayerss(){
    this.teamService.getAllPlayers().subscribe(
    temp => this.parseGames(temp),
    err => console.log(err),
    () => console.log());
  }
  ngOnInit() {
    console.log("i'm running!");
    this.getAllPlayerss();
   
    //this.support(this.lastGames);
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

    /*$.ajax({
      headers: { 'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a' },
      url: 'http://api.football-data.org/v1/teams/445/players',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource        
      var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
      //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
      //var teamId = res[1];
      console.log(response);
      
     
    
       
           $.each(response.players, function(i, f) {
              var tblRow = "<tr>" + "<td>" + f.name + "</td>" + "<td>" + f.position + "</td>" + "<td>" + f.jerseyNumber + 
           "</td>" + "<td>" + f.dateOfBirth + "</td>" +
           "<td>" + f.nationality + "</td>" + "<td>" + f.contractUntil + "</td>" +
           "<td>" + f.marketValue + "</td>" + "</tr>"
               $(tblRow).appendTo("#datdata tbody");
         });
    
       
       
      
      
      
      
      
      
    }); */

  }

}