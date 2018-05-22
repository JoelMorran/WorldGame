import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $.ajax({
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
    
       
       
      
      
      
      
      
      
    }); 

  }

}
