import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  selectedMyTeam: any;

  myTeams : any[];

  constructor(private teamService: TeamService) { }
  //constructor() { }
  
  getMyTeam(){
    this.teamService.getMyTeam().subscribe(temp => this.myTeams = temp);
  }
  ngOnInit() {
    console.log("i'm running!");
    this.getMyTeam();
   
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
      url: 'http://api.football-data.org/v1/teams/445',
      dataType: 'json',
      type: 'GET',
    }).done(function (response) {
      // do something with the response, e.g. isolate the id of a linked resource        
      var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
      //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
      //var teamId = res[1];
      console.log(response);




      $.each(response, function (i, f) {
        var tblRow = "<tr>" + "<td>" + f.name + "</td>" + "<td>" + f.code + "</td>" + "<td>" + f.shortName +
          "</td>" + "<td>" + f.squadMarketValue + "</td>" + "<td>" + "<img src= " + f.crestUrl + " height=100 width=100></img>" + "</td>" + "</tr>"
        $(tblRow).appendTo("#datdata tbody");
      });










    });*/

  }
}
