import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {

  selectedHeadToHead: any;

  headToHeads : any[];

  constructor(private teamService: TeamService) { }
  //constructor() { }

  parseGames(temp){
    this.headToHeads = temp;
    //console.log(temp['fixtures']);
    let x = temp['fixtures'];
    let y = [];
    let otherTeam = "Ternana Calcio";
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
      if (t.awayTeamName==otherTeam || t.homeTeamName==otherTeam){
        y.push(t);
      } 
    }
     this.headToHeads['fixtures']=y;
     console.log(this.headToHeads)
  }
  
  getHeadToHead(){
    this.teamService.getHeadToHead().subscribe(temp => this.parseGames(temp),
    err => console.log(err),
    () => console.log());
  }

  ngOnInit() {
    console.log("i'm running!");
    this.getHeadToHead();
   
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




  }

}
