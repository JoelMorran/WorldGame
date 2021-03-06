import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';
import { Result } from '../../app/result';
import { Odds } from '../../app/odds';
import { LastGame } from '../../app/last-game';
import { HalfTime } from '../../app/half-time';
//import { Chart } from '../../../'
import { Chart } from 'chart.js';
//var Chart = require('chart.js');
@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  selectedPerformance: any;

  performances: LastGame[];
 // chart = [];


  constructor(private teamService: TeamService) { }
  //constructor() { }




  parseGames(temp) {
    this.performances = temp;
    //console.log(temp['fixtures']);
    let x = temp['fixtures'];
    for (let t of x) {
      //console.log(t.date);
      t.date = new Date(t.date);
      //console.log(t.result['odds']);
      if (t.odds != null) {
        console.log(t.odds);

      }
      else {
        t.odds = { homeWin: "N/A", awayWin: "N/A", draw: "N/A" }
      }
    }
    this.performances['fixtures'] = x.slice(x.length - 5);
    console.log(this.performances)
  }

  getPerformance() {
    this.teamService.getPerformance().subscribe(temp => this.parseGames(temp),
      err => console.log(err),
      () => console.log());
  }

 /* getPerformance() { 
  this.teamService.getPerformance()
  .subscribe(res => {






    // var ctx = document.getElementById("myChart").getContext('2d');
    this.chart = new Chart('canvis', {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  }

*/
   

  ngOnInit() {
      console.log("i'm running!");
      this.getPerformance();




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
            url: 'http://api.football-data.org/v1/teams/445/fixtures?timeFrame=p5',
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
                 if(i>=(all-5)){
                  $(tblRow).appendTo("#datdata tbody");
                }
               });
          
             
          
            
            //response['standing']['0']['wins']
            
            
            
            
            
          }); 
          */

    }

}
