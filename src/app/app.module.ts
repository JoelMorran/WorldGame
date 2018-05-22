import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { LastGameComponent } from './last-game/last-game.component';
import { PerformanceComponent } from './performance/performance.component';
import { SeasonComponent } from './season/season.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { AppRoutingModule }     from './app-routing.module';
import { TeamService } from '../team.service';

@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    MyTeamComponent,
    LastGameComponent,
    PerformanceComponent,
    SeasonComponent,
    HeadToHeadComponent,
    AllPlayersComponent,
    CompetitionsComponent,
    LeagueTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
