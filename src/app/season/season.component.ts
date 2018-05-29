import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  selectedSeason: any;

  seasons : any[];

  contentLoad: boolean = false;

  constructor(private teamService: TeamService) { }
  //constructor() { }

  parseGames(temp){
    this.seasons = temp;
    //console.log(temp['fixtures']);
    let x = temp['fixtures'];
    for(let t of x){
      //console.log(t.date);
      t.date = new Date(t.date);
      //console.log(t.result['odds']);
      if (t.odds != null) {
        console.log(t.odds);
        
      }
      else{
        t.odds = { homeWin: "N/A", awayWin: "N/A", draw: "N/A" }
      } 
    }
     this.seasons['fixtures']=x.slice(x.length-5);
     console.log(this.seasons)
  }
  
  getSeason(){
    this.teamService.getSeason().subscribe(
      temp => this.parseGames(temp),
      err => console.log(err),
      () => console.log());
  }
  ngOnInit() {
    console.log("i'm running!");
    this.getSeason();
   
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



/*
    $.ajax({
      headers: { 'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a' },
      url: 'http://api.football-data.org/v1/teams/445/fixtures?season=2017',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource        
      var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
      //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
      //var teamId = res[1];
      response=response.fixtures;
      console.log(response);
      
     
    all=0;
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
           if(i>=(all-all)){
            $(tblRow).appendTo("#datdata tbody");
          }
         });
    
       
       
     
      
      //response['standing']['0']['wins']
      
      
      
      
      
    });


*/

  }

}
