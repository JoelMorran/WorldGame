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
  
  getHeadToHead(){
    this.teamService.getHeadToHead().subscribe(temp => this.headToHeads = temp);
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
