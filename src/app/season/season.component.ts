import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
