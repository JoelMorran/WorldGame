import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {




    $.ajax({
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










    });

  }
}
