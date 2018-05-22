import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-last-game',
  templateUrl: './last-game.component.html',
  styleUrls: ['./last-game.component.css']
})
export class LastGameComponent implements OnInit {

  selectedLastGames: any;

  lastGames : any[];

  constructor(private teamService: TeamService) { }
  //constructor() { }
  
  getLastGames(){
    this.teamService.getLastGame().subscribe(temp => this.lastGames = temp);
  }
  ngOnInit() {
    
    console.log(this.getLastGames());
   /* console.log("i'm running!");
    this.getLastGames();
   let game = this.lastGames;
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
   //console.log(game);
    
   /* $.ajax({
      headers: { 'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a' },
      url: 'http://api.football-data.org/v1/teams/445/fixtures?timeFrame=p5',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource        
      var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
      //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
      //var teamId = res[1];
      response=response.fixtures[0]['_links']['competition'];
      console.log(response);
    });
      
   /*  
    var number, all = 0;{{result['_links]}}
    var number, i = 0;
    var number, f = 0;
           $.each(response, function(i, f) {
         all+=1;
         });
       
           $.each(response, function(i, f) {
        // console.log(f);
        // console.log(f.result);
              var tblRow = "<tr>" + "<td>" + new Date(f.date) + "</td>" + "<td>" + f.status + "</td>" + "<td>" + f.matchday + 
           "</td>" + "<td>" + f.homeTeamName + "</td>" +
           "<td>" + f.awayTeamName + "</td>" + "<td>" + f.result.goalsHomeTeam + "</td>" + "<td>" + f.result.goalsAwayTeam + "</td>" +
           "<td>";
          if(f.result.halfTime){
            tblRow+=
           f.result.halfTime.goalsHomeTeam + "</td>" + "<td>" + f.result.halfTime.goalsAwayTeam + "</td>" +"<td>";
            }
          else{
            tblRow+=
           "N/A" + "</td>" + "<td>" + "N/A" + "</td>" +"<td>";
            }
          if(f.odds){
            tblRow+=f.odds.homeWin + "</td>" + "<td>" + f.odds.draw + "</td>" + "<td>" + f.odds.awayWin + "</td>" + "</tr>";
            }
          else{
            tblRow+="N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "</tr>";
            }
            var number, i;
           if(  i >= ( all - 1 )){
            $(tblRow).appendTo("#datdata tbody");
          }
         });
    
         <table>
        
         <tr *ngFor= "let team of teams">
         <td> team.crstURl</td>
         <td> </td>
         </tr>
         </table>

       
    
      
      //response['standing']['0']['wins']
      
      
      //IF F.STATUS === FINISHED THEN SHOW IF NOT DONT SHOW ONLY SHOW LAST GAME THERE CAN BE TIMED GAMES WE DONT WANT THAT-->
      
      
    });
*/
  }

}
