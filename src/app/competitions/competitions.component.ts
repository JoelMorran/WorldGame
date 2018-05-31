import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';
import { MyTeam } from '../my-team';


@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  selectedCompetitions: any;

  competitionss : MyTeam[];

  constructor(private teamService: TeamService) { }
  //constructor() { }

  parseGames(temp){
    this.competitionss = temp;
    //console.log(temp['fixtures']);
    let x = temp['teams'];
    for(let t of x){
      //console.log(t.date);
      //t.date = new Date(t.date);
      //console.log(t.result['odds']);*/
      console.log("1");
      if (t.squadMarketValue != null) {
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

      if (t.crestUrl !=null) {
        console.log(t.crestUrl);
        console.log("2");
      }
      else{
        t.crestUrl = "https://www.readjunk.com/wp-content/uploads/2015/09/no-image-found1-300x200.png";
        console.log("3");
      }

      if (t.shortName != null) { //WTFFFFFFFFFFFFF
        console.log(t.shortName);
        console.log("2");
      }
      else{
        t.shortName = "N/A";
        console.log("3");
      } 
      
    }
     //this.allPlayerss['fixtures']=[x[x.length-1]];
      //console.log(this.allPlayerss)
  }
  
  getCompetitions(){
    this.teamService.getCompetitions().subscribe(temp => this.parseGames(temp),
    err => console.log(err),
    () => console.log());
  }

  ngOnInit() {
    console.log("i'm running!");
    this.getCompetitions();
   
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
      url: 'http://api.football-data.org/v1/competitions/459/teams/',
      dataType: 'json',
      type: 'GET',
    }).done(function(response) {
      // do something with the response, e.g. isolate the id of a linked resource        
      var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
      //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
      //var teamId = res[1];
      console.log(response);
      
     
    
       
           $.each(response.teams, function(i, f) {
              var tblRow = "<tr>" + "<td>" + f.name + "</td>" + "<td>" + f.code + "</td>" + "<td>" + f.shortName + 
           "</td>" + "<td>" + f.squadMarketValue + "</td>"+ "<td>" + "<img src= " + f.crestUrl + " height=100 width=100></img>"+"</td>"+ "</tr>"
               $(tblRow).appendTo("#datdata tbody");
         });
    
       
       
     
      
      
      
      
      
      
    }); */


  }

}
