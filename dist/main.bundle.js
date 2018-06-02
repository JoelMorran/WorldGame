webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-players/all-players.component.css":
/***/ (function(module, exports) {

module.exports = "/*table {\n    border-collapse: collapse;\n    width: 100%;\n\ttext-align: center;\n}*/\n\ntr {\n    text-align: center;\n    padding: 10px;\n}\n\nth {\n    text-align: center;\n    padding: 51px;\n}\n\ntd{\n    text-align: center;\n    padding: 10px;\n}\n\ntr:nth-child(even){background-color: #0063A6}\n\ntr:nth-child(odd){background-color: rgb(4, 153, 253)}\n\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    height: 586px;\n    overflow-x:20px;\n    overflow-y:30px;\n    border-spacing: 0;\n    max-width: 100%;\n    max-height: 1000px;\n    display: block;\n}\n\ndiv { \n    overflow-y:auto;\n    overflow-x:auto;\n    \n    }"

/***/ }),

/***/ "./src/app/all-players/all-players.component.html":
/***/ (function(module, exports) {

module.exports = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-5776421978150971\",\n    enable_page_level_ads: true\n  });\n</script>\n\n\n<div id=\"ChildDiv\">\n\t\n\t<table>\n\t\t<tr>\n\t\t\t<th>Name</th>\n\t\t\t<th>Position</th>\n\t\t\t<th>Jersey No.</th>\n\t\t\t<th>DOB</th>\n\t\t\t<th>Nationality</th>\n\t\t\t<th>Contract Until</th>\n\t\t\t<th>Market Value</th>\n\t\t\t\n\t\t</tr>\n\t\t\n\n\t\t<tr *ngFor=\"let allPlayers of allPlayerss.players\">\n\t\t\t<td> {{allPlayers.name}} </td>\n\t\t\t<td> {{allPlayers.position}}</td>\n\t\t\t<td> {{allPlayers.jerseyNumber}} </td>\n\t\t\t<td> {{allPlayers.dateOfBirth}} </td>\n\t\t\t<td> {{allPlayers.nationality}} </td>\n\t\t\t<td> {{allPlayers.contractUntil}} </td>\n\t\t\t<td> {{allPlayers.marketValue}} </td>\n\t\t\t\n\t\t\t\n\t\t</tr>\n\t\t\n\t</table>\n\n\n</div>\n\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n\n<!--<div class=\"wrapper\" style=\"overflow-x:auto;\">\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>name</th>\n\t<th>position</th>\n\t<th>jerseyNumber</th>\n\t<th>dateOfBirth</th>\n\t<th>nationality</th>\n\t<th>contractUntil</th>\n\t<th>marketValue</th>\n\t\n\t\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>-->\n \n\n"

/***/ }),

/***/ "./src/app/all-players/all-players.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPlayersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllPlayersComponent = /** @class */ (function () {
    function AllPlayersComponent(teamService) {
        this.teamService = teamService;
    }
    //constructor() { }
    AllPlayersComponent.prototype.parseGames = function (temp) {
        this.allPlayerss = temp;
        //console.log(temp['fixtures']);
        var x = temp['players'];
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var t = x_1[_i];
            //console.log(t.date);
            //t.date = new Date(t.date);
            //console.log(t.result['odds']);*/
            console.log("1");
            if (t.marketValue != null) {
                console.log(t.marketValue);
                console.log("2");
            }
            else {
                t.marketValue = "N/A";
                console.log("3");
            }
            if (t.jerseyNumber != null) {
                console.log(t.jerseyNumber);
                console.log("2");
            }
            else {
                t.jerseyNumber = "N/A";
                console.log("3");
            }
            if (t.contractUntil != null) {
                console.log(t.contractUntil);
                console.log("2");
            }
            else {
                t.contractUntil = "N/A";
                console.log("3");
            }
        }
        //this.allPlayerss['fixtures']=[x[x.length-1]];
        //console.log(this.allPlayerss)
    };
    AllPlayersComponent.prototype.getAllPlayerss = function () {
        var _this = this;
        this.teamService.getAllPlayers().subscribe(function (temp) { return _this.parseGames(temp); }, function (err) { return console.log(err); }, function () { return console.log(); });
    };
    AllPlayersComponent.prototype.ngOnInit = function () {
        console.log("i'm running!");
        this.getAllPlayerss();
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
        
           
           
          
          
          
          
          
          
        }); */
    };
    AllPlayersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all-players',
            template: __webpack_require__("./src/app/all-players/all-players.component.html"),
            styles: [__webpack_require__("./src/app/all-players/all-players.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], AllPlayersComponent);
    return AllPlayersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_team_my_team_component__ = __webpack_require__("./src/app/my-team/my-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_players_all_players_component__ = __webpack_require__("./src/app/all-players/all-players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__competitions_competitions_component__ = __webpack_require__("./src/app/competitions/competitions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__head_to_head_head_to_head_component__ = __webpack_require__("./src/app/head-to-head/head-to-head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__last_game_last_game_component__ = __webpack_require__("./src/app/last-game/last-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__league_table_league_table_component__ = __webpack_require__("./src/app/league-table/league-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__performance_performance_component__ = __webpack_require__("./src/app/performance/performance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__season_season_component__ = __webpack_require__("./src/app/season/season.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/myteam', pathMatch: 'full' },
    { path: 'myteam', component: __WEBPACK_IMPORTED_MODULE_2__my_team_my_team_component__["a" /* MyTeamComponent */] },
    { path: 'allplayers', component: __WEBPACK_IMPORTED_MODULE_3__all_players_all_players_component__["a" /* AllPlayersComponent */] },
    { path: 'competitions', component: __WEBPACK_IMPORTED_MODULE_4__competitions_competitions_component__["a" /* CompetitionsComponent */] },
    { path: 'headtohead', component: __WEBPACK_IMPORTED_MODULE_5__head_to_head_head_to_head_component__["a" /* HeadToHeadComponent */] },
    { path: 'lastgame', component: __WEBPACK_IMPORTED_MODULE_6__last_game_last_game_component__["a" /* LastGameComponent */] },
    { path: 'leaguetable', component: __WEBPACK_IMPORTED_MODULE_7__league_table_league_table_component__["a" /* LeagueTableComponent */] },
    { path: 'performance', component: __WEBPACK_IMPORTED_MODULE_8__performance_performance_component__["a" /* PerformanceComponent */] },
    { path: 'season', component: __WEBPACK_IMPORTED_MODULE_9__season_season_component__["a" /* SeasonComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\n/*h1 {\n  font-size: 500%;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n /* font-size: 2em; */\n/* margin-top: 0;\n  padding-top: 0;\n}\n\nh3 {\n   /*font-size: 5em; */\n/* margin-top: 0;\n  float: left; \n  margin-left: 10px;\n\n}\n\nh4 {\n /* font-size: 3em; */\n/*margin-top: 100px;\n  padding-top: 0px;\n  /*text-align: left; */\n/*color: blue;\n  float: left;\n}*/\n/*.header img {\n  float: left;\n  width: 30px;\n  \n}*/\n/*#four {\n  float: right;\n}*/\n.row {\n  background-color: #0063A6;\n}\n#seven {\nbackground-color: #D3D3D3;\n  /*background-image: url(\"http://www.greenlogic.net.au/wp-content/uploads/2017/07/grass-background-28-1024x640.jpg\");*/\n}\n/*#hack{\n  width: auto;\n  height: auto;\n  /*max-width: auto;*/\n/*max-height: auto;\n  /*display:block;*/\n/*}\n\n#hack2{\n  width: auto;\n  height: auto;\n  /*max-width: auto;*/\n/* max-height: auto;*/\n/*display:block;*/\n/*} */\n.teamName {\n  float: left;\n  margin-top: 20px;\n}\n/*.jumbotron{\n  \n background-image: url(\"http://www.greenlogic.net.au/wp-content/uploads/2017/07/grass-background-28-1024x640.jpg\");\n /*background-repeat: no-repeat;\n background-size: 100% 100%;*/\n/*} */\nul.sidenav {\n  list-style-type: none;\n  margin-top: 0px;\n  padding: 0;\n  width: 16.5%;\n  background-color: #0063A6; /* rgb(4, 153, 253);*/\n  position: fixed;\n  height: 100%;\n  overflow: auto; \n  /*background-image: url(\"http://www.greenlogic.net.au/wp-content/uploads/2017/07/grass-background-28-1024x640.jpg\");*/\n\n}\nul.sidenav li a {\n  display: block;\n  color: #000;\n  padding: 8px 16px;\n  text-decoration: none;\n}\nul.sidenav li a.active {\n  background-color: rgb(4, 153, 253);\n  color: white;\n}\nul.sidenav li a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\ndiv.content {\n  margin-left: 25%;\n  padding: 1px 16px;\n  height: 1000px;\n}\n@media all and (max-width: 30000px) {\n  ul.sidenav {\n      width: 100%;\n      height: auto;\n      position: relative;\n  }\n  ul.sidenav li a {\n      float: left;\n      padding: 20px;\n  }\n  div.content {margin-left: 0;}\n}\n@media all and (max-width: 10000px) {\n  ul.sidenav li a {\n      text-align: center;\n      float: none;\n  }\n}\n.ad{\n  background-image: url(\"https://image.ibb.co/imRECd/Cny_KPpr_WYAAB20_X.jpg\");\n  background-repeat: repeat;\n  background-size: 292px 300px;\n}\n.jumbotron{\n  \n  background-image: url(\"https://png.pngtree.com/back_origin_pic/03/85/59/37e6a8ca9d162e0bb606750c2bc6dfc1.jpg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  max-height: 150%;\n height: 102.5%;\n }\n#one{\n  float: left;\n  width: 15%;\n  height: 15%;\n  max-width: 50px;\n  max-height: 50px;\n  /*display:block;*/\n \n}\n#two{\n  float: right;\n  width: 15%;\n    height: 15%;\n    max-width: 50px;\n    max-height: 50px;\n   /* display:block; */\n}\n#five {\n  font-size: 100%;\n  text-align: center;\n  font: bold;\n  color: white;\n  /*max-width: 200px;*/\n  \n}\n#three{\n  font-size: 315%;\n  color: white;\n  /*padding-top: 75px;*/\n  text-align: center;\n}\n@media all and (min-width: 225px) {\n.jumbotron{\n  \n  background-image: url(\"https://png.pngtree.com/back_origin_pic/03/85/59/37e6a8ca9d162e0bb606750c2bc6dfc1.jpg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  max-height: 150%;\n height: 102.5%;\n }\n\n #one{\n  float: left;\n  width: 15%;\n  height: 15%;\n  max-width: 50px;\n  max-height: 50px;\n  /*display:block;*/\n \n}\n#two{\n  float: right;\n  width: 15%;\n    height: 15%;\n    max-width: 50px;\n    max-height: 50px;\n   /* display:block; */\n}\n\n#five {\n  font-size: 50%;\n  text-align: center;\n  font: bold;\n  color: white;\n  /*max-width: 200px;*/\n  \n}\n\n#three{\n  font-size: 315%;\n  color: white;\n  /*padding-top: 75px;*/\n  text-align: center;\n}\n/*above 300 - 350 px*/\n}\n/* For mobile phones: */\n@media all and (min-width: 300px) {\n.jumbotron{\n  \n  background-image: url(\"https://png.pngtree.com/back_origin_pic/03/85/59/37e6a8ca9d162e0bb606750c2bc6dfc1.jpg\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  max-height: 150%;\n height: 102.5%;\n }\n\n #one{\n  float: left;\n  width: 25%;\n  height: 25%;\n  max-width: 50px;\n  max-height: 50px;\n  /*display:block;*/\n \n}\n#two{\n  float: right;\n  width: 25%;\n    height: 25%;\n    max-width: 50px;\n    max-height: 50px;\n   /* display:block; */\n}\n\n#five {\n  font-size: 100%;\n  text-align: center;\n  font: bold;\n  color: white;\n  /*max-width: 200px;*/\n  \n}\n\n#three{\n  font-size: 315%;\n  color: white;\n  /*padding-top: 75px;*/\n  text-align: center;\n}\n/*above 300 - 350 px*/\n}\n@media all and (min-width: 351px) {\n  .jumbotron{\n  \n    background-image: url(\"https://png.pngtree.com/back_origin_pic/03/85/59/37e6a8ca9d162e0bb606750c2bc6dfc1.jpg\");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    max-height: 150%;\n   height: 90%;\n   }\n  \n   #one{\n    float: left;\n    width: 50%;\n    height: 50%;\n    max-width: 50px;\n    max-height: 50px;\n    /*display:block;*/\n   \n  }\n  #two{\n    float: right;\n    width: 50%;\n      height: 50%;\n      max-width: 50px;\n      max-height: 50px;\n     /* display:block; */\n  }\n  \n  #five {\n    font-size: 125%;\n    text-align: center;\n    font: bold;\n    color: white;\n    /*max-width: 200px;*/\n    \n  }\n  \n  #three{\n    font-size: 315%;\n    color: white;\n    /*padding-top: 75px;*/\n    text-align: center;\n  }\n  /*above 300 - 350 px*/\n}\n@media all and (min-width: 450px) {\n  \n  \n  .jumbotron{\n  \n    background-image: url(\"https://png.pngtree.com/back_origin_pic/03/85/59/37e6a8ca9d162e0bb606750c2bc6dfc1.jpg\");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    max-height: 150%;\n   height: 85%;\n   }\n  \n   #one{\n    float: left;\n    width: 80%;\n    height: 80%;\n    max-width: 50px;\n    max-height: 50px;\n    /*display:block;*/\n   \n  }\n  #two{\n    float: right;\n    width: 80%;\n      height: 80%;\n      max-width: 50px;\n      max-height: 50px;\n     /* display:block; */\n  }\n  \n  #five {\n    font-size: 175%;\n    text-align: center;\n    font: bold;\n    color: white;\n    /*max-width: 200px;*/\n    \n  }\n  \n  #three{\n    font-size: 315%;\n    color: white;\n    /*padding-top: 75px;*/\n    text-align: center;\n  }\n  /*above 300 - 350 px*/\n}\n@media all and (min-width: 600px) {\n  .jumbotron{\n  \n    background-image: url(\"https://png.pngtree.com/back_origin_pic/03/85/59/37e6a8ca9d162e0bb606750c2bc6dfc1.jpg\");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    max-height: 150%;\n   height: 100%;\n   }\n  \n   #one{\n    float: left;\n    width: 15%;\n    height: 15%;\n    max-width: 100px;\n    max-height: 100px;\n    /*display:block;*/\n   \n  }\n  #two{\n    float: right;\n    width: 15%;\n      height: 15%;\n      max-width: 100px;\n      max-height: 100px;\n     /* display:block; */\n  }\n  \n  #five {\n    font-size: 225%;\n    text-align: center;\n    font: bold;\n    color: white;\n    /*max-width: 200px;*/\n    \n  }\n  \n  #three{\n    font-size: 215%;\n    color: white;\n    /*padding-top: 75px;*/\n    text-align: left;\n  }\n  /*above 300 - 350 px*/\n}\n@media all and (min-width: 1000px) {\n  .jumbotron{\n  \n    background-image: url(\"https://png.pngtree.com/back_origin_pic/03/85/59/37e6a8ca9d162e0bb606750c2bc6dfc1.jpg\");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    max-height: 150%;\n   height: 100%;\n   }\n  \n   #one{\n    float: left;\n    width: 100%;\n    height: 100%;\n    max-width: 125px;\n    max-height: 125px;\n    /*display:block;*/\n   \n  }\n  #two{\n    float: right;\n    width: 100%;\n      height: 100%;\n      max-width: 125px;\n      max-height: 125px;\n     /* display:block; */\n  }\n  \n  #five {\n    font-size: 315%;\n    text-align: center;\n    font: bold;\n    color: white;\n    /*max-width: 200px;*/\n    \n  }\n  \n  #three{\n    font-size: 315%;\n    color: white;\n    /*padding-top: 75px;*/\n    text-align: left;\n  }\n  /*above 300 - 350 px*/\n}\n@media all and (min-width: 1439px) {\n  .jumbotron{\n  \n    background-image: url(\"https://png.pngtree.com/back_origin_pic/03/85/59/37e6a8ca9d162e0bb606750c2bc6dfc1.jpg\");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    max-height: 150%;\n    height: 100%;\n   }\n\n   #one{\n    float: left;\n    width: 100%;\n    height: 100%;\n    max-width: 200px;\n    max-height: 200px;\n    display:block;\n   \n  }\n\n  #two{\n    float: right;\n    width: 100%;\n    width: 100%;\n    height: 100%;\n    max-width: 200px;\n    max-height: 200px;\n    display:block;\n\n  }\n\n  #five {\n    font-size: 600%;\n    text-align: center;\n    font: bold;\n    color: white;\n    /*text-shadow: 2px 2px 8px black;*/\n   \n    \n  }\n\n  #three{\n    font-size: 315%;\n    color: white;\n    /*padding-top: 75px;*/\n  }\n  \n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n    <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n    <script>\n      (adsbygoogle = window.adsbygoogle || []).push({\n        google_ad_client: \"ca-pub-5776421978150971\",\n        enable_page_level_ads: true\n      });\n    </script>\n  <!--<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n     (adsbygoogle = window.adsbygoogle || []).push({\n          google_ad_client: \"ca-pub-6977942731603442\",\n          enable_page_level_ads: true\n     });\n</script>-->\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n</head>\n<!--<div  id=\"hack\">    \n    </div>-->\n\n<!-- <div class=\"row\" id=\"six\"> \n        <div class=\"col-sm-12\" id=\"hack\"></div>\n        <img id=\"hack2\" src=\"https://latrobeuni-my.sharepoint.com/:i:/r/personal/jamorran_students_latrobe_edu_au/Documents/back2.png?csf=1&e=zk609T\"/>        \n       </div>-->\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"jumbotron\">\n      <div id=\"five\">\n        <img id=\"one\" alt=\"Angular Logo\" src=\"http://upload.wikimedia.org/wikipedia/de/4/42/Logo_FC_Empoli.svg\" />\n      Elite Soccer Broadcast\n        <img id=\"two\" alt=\"Angular Logo\" src=\"http://upload.wikimedia.org/wikipedia/de/4/42/Logo_FC_Empoli.svg\" />\n      </div>\n    </div>\n  </div>\n</div>\n\n  <!-- <img  src=\"https://image.ibb.co/i5ZdXd/back2.png\"/>-->\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n\n      <p id=\"three\">Empoli FC</p>\n\n      <ul class=sidenav>\n        <li>\n          <a routerLink=\"/myteam\" routerLinkActive=\"active\">My Team</a>\n        </li>\n        <li>\n          <a routerLink=\"/allplayers\" routerLinkActive=\"active\">All Players</a>\n        </li>\n        <li>\n          <a routerLink=\"/competitions\" routerLinkActive=\"active\">Competitions</a>\n        </li>\n        <li>\n          <a routerLink=\"/headtohead\" routerLinkActive=\"active\">Head To Head</a>\n        </li>\n        <li>\n          <a routerLink=\"/lastgame\" routerLinkActive=\"active\">Last Game</a>\n        </li>\n        <li>\n          <a routerLink=\"/leaguetable\" routerLinkActive=\"active\">League Table</a>\n        </li>\n        <li>\n          <a routerLink=\"/performance\" routerLinkActive=\"active\">Performace</a>\n        </li>\n        <li>\n          <a routerLink=\"/season\" routerLinkActive=\"active\">Season</a>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <p id=\"four\">\n        <router-outlet></router-outlet>\n      </p>\n\n    </div>\n    <div class=\"col-sm-2\">\n      <a href=\"https://secure-thicket-70371.herokuapp.com/myteam\"><div class=\"ad\">\n        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n        <br><br><br><br><br></div></a>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <!--<div id=\"seven\">\n  <div class=\"row\" id=\"six\">\n    \n    \n    <div class=\"col-sm-12\" id=\"hack\"></div>\n    <img id=\"hack2\" src=\"https://latrobeuni-my.sharepoint.com/:i:/r/personal/jamorran_students_latrobe_edu_au/Documents/back2.png?csf=1&e=zk609T\"/>\n      \n\n    \n    \n   </div>\n    \n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n\n      <p id=\"three\">Empoli FC</p>\n\n      <ul class=sidenav>\n        <li>\n          <a routerLink=\"/myteam\" routerLinkActive=\"active\">My Team</a>\n        </li>\n        <li>\n          <a routerLink=\"/allplayers\" routerLinkActive=\"active\">All Players</a>\n        </li>\n        <li>\n          <a routerLink=\"/competitions\" routerLinkActive=\"active\">Competitions</a>\n        </li>\n        <li>\n          <a routerLink=\"/headtohead\" routerLinkActive=\"active\">Head To Head</a>\n        </li>\n        <li>\n          <a routerLink=\"/lastgame\" routerLinkActive=\"active\">Last Game</a>\n        </li>\n        <li>\n          <a routerLink=\"/leaguetable\" routerLinkActive=\"active\">League Table</a>\n        </li>\n        <li>\n          <a routerLink=\"/performance\" routerLinkActive=\"active\">Performace</a>\n        </li>\n        <li>\n          <a routerLink=\"/season\" routerLinkActive=\"active\">Season</a>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class=\"col-sm-8\">\n      \n      <p id=\"four\">\n        <router-outlet></router-outlet>\n      </p>\n\n    </div>\n    <div class=\"col-sm-2\"></div>\n  </div>\n</div>-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.chart = [];
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navheader_navheader_component__ = __webpack_require__("./src/app/navheader/navheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_team_my_team_component__ = __webpack_require__("./src/app/my-team/my-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__last_game_last_game_component__ = __webpack_require__("./src/app/last-game/last-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__performance_performance_component__ = __webpack_require__("./src/app/performance/performance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__season_season_component__ = __webpack_require__("./src/app/season/season.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__head_to_head_head_to_head_component__ = __webpack_require__("./src/app/head-to-head/head-to-head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__all_players_all_players_component__ = __webpack_require__("./src/app/all-players/all-players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__competitions_competitions_component__ = __webpack_require__("./src/app/competitions/competitions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__league_table_league_table_component__ = __webpack_require__("./src/app/league-table/league-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__team_service__ = __webpack_require__("./src/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navheader_navheader_component__["a" /* NavheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__my_team_my_team_component__["a" /* MyTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_6__last_game_last_game_component__["a" /* LastGameComponent */],
                __WEBPACK_IMPORTED_MODULE_7__performance_performance_component__["a" /* PerformanceComponent */],
                __WEBPACK_IMPORTED_MODULE_8__season_season_component__["a" /* SeasonComponent */],
                __WEBPACK_IMPORTED_MODULE_9__head_to_head_head_to_head_component__["a" /* HeadToHeadComponent */],
                __WEBPACK_IMPORTED_MODULE_10__all_players_all_players_component__["a" /* AllPlayersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__competitions_competitions_component__["a" /* CompetitionsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__league_table_league_table_component__["a" /* LeagueTableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__team_service__["a" /* TeamService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/competitions/competitions.component.css":
/***/ (function(module, exports) {

module.exports = "/*table {\n    border-collapse: collapse;\n    width: 100%;\n    text-align: center;\n    \n}\n\n*/\n\ntr {\n    text-align: center;\n    padding: 10px;\n}\n\nth {\n    text-align: center;\n    padding: 10px;\n}\n\ntd{\n    text-align: center;\n    padding: 90px;\n}\n\ntr:nth-child(even){background-color: #0063A6}\n\ntr:nth-child(odd){background-color: rgb(4, 153, 253)}\n\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    height: 586px;\n    overflow-x:20px;\n    overflow-y:30px;\n    border-spacing: 0;\n    max-width: 100%;\n    max-height: 1000px;\n    display: block;\n}\n\ndiv { \n    overflow-y:auto;\n    overflow-x:auto;\n    \n    }"

/***/ }),

/***/ "./src/app/competitions/competitions.component.html":
/***/ (function(module, exports) {

module.exports = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-5776421978150971\",\n    enable_page_level_ads: true\n  });\n</script>\n\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n<div id=\"ChildDiv\">\n\t\n  <table>\n    <tr>\n      <th>Name</th>\n      <th>Code</th>\n      <th>Short Name</th>\n      <th>Squad Market Value</th>\n      <th>Crest</th>\n      \n    </tr>\n    \n\n    <tr *ngFor=\"let competitions of competitionss.teams\">\n      <td> {{competitions.name}} </td>\n      <td> {{competitions.code}}</td>\n      <td> {{competitions.shortName}} </td>\n      <td> {{competitions.squadMarketValue}} </td>\n      <td> <img src=\"{{competitions.crestUrl}}\"  height=100 width=100/> </td>\n      \n      \n    </tr>\n    \n  </table>\n\n\n</div>\n\n\n\n<!--<div class=\"wrapper\" style=\"overflow-x:auto;\">\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>name</th>\n\t<th>code</th>\n\t<th>shortName</th>\n\t<th>squadMarketValue</th>\n\t<th>crestUrl</th>\n\t\n\t\n\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>-->\n \n\n"

/***/ }),

/***/ "./src/app/competitions/competitions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompetitionsComponent = /** @class */ (function () {
    function CompetitionsComponent(teamService) {
        this.teamService = teamService;
    }
    //constructor() { }
    CompetitionsComponent.prototype.parseGames = function (temp) {
        this.competitionss = temp;
        //console.log(temp['fixtures']);
        var x = temp['teams'];
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var t = x_1[_i];
            //console.log(t.date);
            //t.date = new Date(t.date);
            //console.log(t.result['odds']);*/
            console.log("1");
            if (t.squadMarketValue != null) {
                console.log(t.squadMarketValue);
                // console.log("2");
            }
            else {
                t.squadMarketValue = "N/A";
                // console.log("3");
            }
            if (t.code != null) {
                console.log(t.code);
                // console.log("2");
            }
            else {
                t.code = "N/A";
                // console.log("3");
            }
            if (t.shortName != "" && t.shortName != null) {
                console.log(t.shortName);
                // console.log("2");
            }
            else {
                t.shortName = "N/A";
                console.log("3");
            }
            if (t.crestUrl != null) {
                console.log(t.crestUrl);
                console.log("2");
            }
            else {
                t.crestUrl = "https://www.readjunk.com/wp-content/uploads/2015/09/no-image-found1-300x200.png";
                console.log("3");
            }
        }
        //this.allPlayerss['fixtures']=[x[x.length-1]];
        //console.log(this.allPlayerss)
    };
    CompetitionsComponent.prototype.getCompetitions = function () {
        var _this = this;
        this.teamService.getCompetitions().subscribe(function (temp) { return _this.parseGames(temp); }, function (err) { return console.log(err); }, function () { return console.log(); });
    };
    CompetitionsComponent.prototype.ngOnInit = function () {
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
    };
    CompetitionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-competitions',
            template: __webpack_require__("./src/app/competitions/competitions.component.html"),
            styles: [__webpack_require__("./src/app/competitions/competitions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], CompetitionsComponent);
    return CompetitionsComponent;
}());



/***/ }),

/***/ "./src/app/head-to-head/head-to-head.component.css":
/***/ (function(module, exports) {

module.exports = "/*table {\n    border-collapse: collapse;\n    width: 100%;\n}\n*/\n\ntr, th {\n    text-align: center;\n    padding: 40px;\n}\n\ntd{\n    text-align: center;\n    padding: 10px;\n}\n\ntr:nth-child(even){background-color: #0063A6}\n\ntr:nth-child(odd){background-color: rgb(4, 153, 253)}\n\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    height: 432px;\n    overflow-x:20px;\n    overflow-y:30px;\n    border-spacing: 0;\n    max-width: 100%;\n    max-height: 1000px;\n    display: block;\n}\n\ndiv { \n    overflow-y:auto;\n    overflow-x:auto;\n    \n    }"

/***/ }),

/***/ "./src/app/head-to-head/head-to-head.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ChildDiv\">\n\t\n  <table>\n    <tr>\n      <th>Date</th>\n      <th>Status</th>\n      <th>Match Day</th>\n      <th>Home Team</th>\n      <th>Away Team</th>\n      <th>Goals Home</th>\n      <th>Goals Away</th>\n      <th>Halftime Home Goals</th>\n      <th>Halftime Away Goals</th>\n      <th>Odds Home</th>\n      <th>Odds Draw</th>\n      <th>Odds Away</th>\n    </tr>\n    \n    <tr *ngFor=\"let headToHead of headToHeads.fixtures\">\n      \n      <td> {{headToHead.date}} </td>\n      <td> {{headToHead.status}}</td>\n      <td> {{headToHead.matchday}}</td>\n      <td> {{headToHead.homeTeamName}} </td>\n      <td> {{headToHead.awayTeamName}} </td>\n      <td> {{headToHead.result.goalsHomeTeam}} </td>\n      <td> {{headToHead.result.goalsAwayTeam}} </td>\n      <td> {{headToHead.result.halfTime.goalsHomeTeam}} </td>\n      <td> {{headToHead.result.halfTime.goalsAwayTeam}} </td>\n    <td> {{headToHead.odds.homeWin}} </td>\n      <td> {{headToHead.odds.draw}} </td>\n      <td> {{headToHead.odds.awayWin}} </td> \n      \n      \n    </tr>\n    \n  </table>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/head-to-head/head-to-head.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadToHeadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadToHeadComponent = /** @class */ (function () {
    function HeadToHeadComponent(teamService) {
        this.teamService = teamService;
    }
    //constructor() { }
    HeadToHeadComponent.prototype.parseGames = function (temp) {
        this.headToHeads = temp;
        //console.log(temp['fixtures']);
        var x = temp['fixtures'];
        var y = [];
        var otherTeam = "Ternana Calcio";
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var t = x_1[_i];
            //console.log(t.date);
            t.date = new Date(t.date);
            //console.log(t.result['odds']);
            if (t.odds != null) {
                console.log(t.odds);
            }
            else {
                t.odds = { homeWin: "N/A", awayWin: "N/A", draw: "N/A" };
            }
            if (t.awayTeamName == otherTeam || t.homeTeamName == otherTeam) {
                y.push(t);
            }
        }
        this.headToHeads['fixtures'] = y;
        console.log(this.headToHeads);
    };
    HeadToHeadComponent.prototype.getHeadToHead = function () {
        var _this = this;
        this.teamService.getHeadToHead().subscribe(function (temp) { return _this.parseGames(temp); }, function (err) { return console.log(err); }, function () { return console.log(); });
    };
    HeadToHeadComponent.prototype.ngOnInit = function () {
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
    };
    HeadToHeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-head-to-head',
            template: __webpack_require__("./src/app/head-to-head/head-to-head.component.html"),
            styles: [__webpack_require__("./src/app/head-to-head/head-to-head.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], HeadToHeadComponent);
    return HeadToHeadComponent;
}());



/***/ }),

/***/ "./src/app/last-game/last-game.component.css":
/***/ (function(module, exports) {

module.exports = "/*table {\n    border-collapse: collapse;\n    width: 100%;\n}\n*/\ntr {\n    text-align: center;\n    padding: 40px;\n}\nth {\n    text-align: center;\n    padding: 40px;\n}\ntd{\n    text-align: center;\n    padding: 10px;\n}\ntr:nth-child(even){background-color: #0063A6}\ntr:nth-child(odd){background-color: rgb(4, 153, 253)}\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    height: 280px;\n    overflow-x:20px;\n    overflow-y:30px;\n    border-spacing: 0;\n    max-width: 100%;\n    max-height: 1000px;\n    display: block;\n}\ndiv { \n    overflow-y:auto;\n    overflow-x:auto;\n    \n    }"

/***/ }),

/***/ "./src/app/last-game/last-game.component.html":
/***/ (function(module, exports) {

module.exports = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-5776421978150971\",\n    enable_page_level_ads: true\n  });\n</script>\n\n\n<div id=\"ChildDiv\">\n\t\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<th>Date</th>\n\t\t\t\t<th>Status</th>\n\t\t\t\t<th>Matchday</th>\n\t\t\t\t<th>Home Team</th>\n\t\t\t\t<th>Away Team</th>\n\t\t\t\t<th>Goals Home</th>\n\t\t\t\t<th>Goals Away</th>\n\t\t\t\t<th>Halftime Home Goals</th>\n\t\t\t\t<th>Halftime Away Goals</th>\n\t\t\t\t<th>Odds Home</th>\n\t\t\t\t<th>Odds Draw</th>\n\t\t\t\t<th>Odds Away</th>\n\t\t\t</tr>\n\t\t\t\n\t\t\t<tr *ngFor=\"let lastGame of lastGames.fixtures\">\n\t\t\t\t\n\t\t\t\t<td> {{lastGame.date}} </td>\n\t\t\t\t<td> {{lastGame.status}}</td>\n\t\t\t\t<td> {{lastGame.matchday}}</td>\n\t\t\t\t<td> {{lastGame.homeTeamName}} </td>\n\t\t\t\t<td> {{lastGame.awayTeamName}} </td>\n\t\t\t\t<td> {{lastGame.result.goalsHomeTeam}} </td>\n\t\t\t\t<td> {{lastGame.result.goalsAwayTeam}} </td>\n\t\t\t\t<td> {{lastGame.result.halfTime.goalsHomeTeam}} </td>\n\t\t\t\t<td> {{lastGame.result.halfTime.goalsAwayTeam}} </td>\n\t\t\t\t<td> {{lastGame.odds.homeWin}} </td>\n\t\t\t\t<td> {{lastGame.odds.draw}} </td>\n\t\t\t\t<td> {{lastGame.odds.awayWin}} </td> \n\t\t\t\t\n\t\t\t\t\n\n\n\n\n\n\n\n\t\t\t\t<!--<td *ngIf=\"lastGame.result.halfTime != null\"> {{lastGame.result.halfTime}} </td> \n\t\t\t\t\t<td> {{lastGame.result.halfTime.goalsAwayTeam}}; </td> <td>\n\t\t\t\t\t\n\t\t\t\t<td *ngIf=\"lastGame.result.halfTime == null\">\t\n\t\t\t\t\t\n\t\t\t\t\t {{\"N/A\"}} </td> <td> {{\"N/A\"}} </td> <td>;\n\t\t\t\t\n\t\t\t\t\t*ngIf={{lastGame.odds}}; then {{lastGame.odds.homeWin}} </td>\n\t\t\t\t\t <td> {{lastGame.odds.draw}} </td> <td> {{lastGame.odds.awayWin}} </td> </tr>;\n\t\t\t\t\t\t\n\t\t\t\t\telse {{\"N/A\"}} </td> <td> {{\"N/A\"}} </td> <td> {{\"N/A\"}} </td> </tr>;\n\t\t\t\t\t\t\n\t\t\t\t\t *ngIf(  i >= ( all - 1 )){\n\t\t\t\t\t\t$(tblRow).appendTo(\"tr\");\n\t\t\t\t\t}-->\n\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<!--<td><img src=\"{{team.crestURL}}\" /> </td>-->\n\t\t\t</tr>\n\t\t\t\n\t\t</table>\n\n\t\n</div>\n\n<!--\n\t\t\t $.each(response, function(i, f) {\n\t\t all+=1;\n\t\t });\n\t \n\t\t\t $.each(response, function(i, f) {\n\t\t// console.log(f);\n\t\t// console.log(f.result);\n\t\t\t\t\tvar tblRow = \"<tr>\" + \"<td>\" + new Date(f.date) + \"</td>\" + \"<td>\" + f.status + \"</td>\" + \"<td>\" + f.matchday + \n\t\t\t \"</td>\" + \"<td>\" + f.homeTeamName + \"</td>\" +\n\t\t\t \"<td>\" + f.awayTeamName + \"</td>\" + \"<td>\" + f.result.goalsHomeTeam + \"</td>\" + \"<td>\" + f.result.goalsAwayTeam + \"</td>\" +\n\t\t\t \"<td>\";\n\t\t\tif(f.result.halfTime){\n\t\t\t\ttblRow+=\n\t\t\t f.result.halfTime.goalsHomeTeam + \"</td>\" + \"<td>\" + f.result.halfTime.goalsAwayTeam + \"</td>\" +\"<td>\";\n\t\t\t\t}\n\t\t\telse{\n\t\t\t\ttblRow+=\n\t\t\t \"N/A\" + \"</td>\" + \"<td>\" + \"N/A\" + \"</td>\" +\"<td>\";\n\t\t\t\t}\n\t\t\tif(f.odds){\n\t\t\t\ttblRow+=f.odds.homeWin + \"</td>\" + \"<td>\" + f.odds.draw + \"</td>\" + \"<td>\" + f.odds.awayWin + \"</td>\" + \"</tr>\";\n\t\t\t\t}\n\t\t\telse{\n\t\t\t\ttblRow+=\"N/A\" + \"</td>\" + \"<td>\" + \"N/A\" + \"</td>\" + \"<td>\" + \"N/A\" + \"</td>\" + \"</tr>\";\n\t\t\t\t}\n\t\t\t\tvar number, i;\n\t\t\t if(  i >= ( all - 1 )){\n\t\t\t\t$(tblRow).appendTo(\"#datdata tbody\");\n\t\t\t}\n\t\t });\n\n\t\t <table>\n\t\t\n\t\t <tr *ngFor= \"let team of teams\">\n\t\t <td>\n\t\t <td> team.crstURl</td>\n\t\t <td> </td>\n\t\t </tr>\n\t\t </table>\n\n\t \n\n\t\n\t//response['standing']['0']['wins']\n\t\n\t\n\t//IF F.STATUS === FINISHED THEN SHOW IF NOT DONT SHOW ONLY SHOW LAST GAME THERE CAN BE TIMED GAMES WE DONT WANT THAT-->\n\n\n\n\n\n<!-- <div class=\"wrapper\" style=\"overflow-x:auto;\"> \n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>date</th>\n\t<th>status</th>\n\t<th>matchday</th>\n\t<th>homeTeamName</th>\n\t<th>awayTeamName</th>\t\n\t<th>goalsHomeTeam</th>\n\t<th>goalsAwayTeam</th>\n\t<th>halftimegoalsHomeTeam</th>\n\t<th>halftimeawaygoals</th>\n\t<th>oddshomeWin</th>\n\t<th>oddsdraw</th>\n\t<th>oddsawayWin</th>\n\t\n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>-->"

/***/ }),

/***/ "./src/app/last-game/last-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LastGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LastGameComponent = /** @class */ (function () {
    function LastGameComponent(teamService) {
        this.teamService = teamService;
        //results : Result[];
        this.lame = [{ 'id': 1, 'bid': 2, 'mid': 3, 'did': 4 }];
        this.checkElement = false;
    }
    //constructor() { }
    LastGameComponent.prototype.parseGames = function (temp) {
        this.lastGames = temp;
        //console.log(temp['fixtures']);
        var x = temp['fixtures'];
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var t = x_1[_i];
            //console.log(t.date);
            t.date = new Date(t.date);
            //console.log(t.result['odds']);
            if (t.odds != null) {
                console.log(t.odds);
            }
            else {
                t.odds = { homeWin: "N/A", awayWin: "N/A", draw: "N/A" };
            }
        }
        this.lastGames['fixtures'] = [x[x.length - 1]];
        console.log(this.lastGames);
        //x=[x[x.length-1]];
        //console.log(temp); 
        /* for(let i = 0; i < temp.length; i++){
           console.log(i);
          temp[i].date = new Date(temp[i].date);
           console.log("date");
           if (!temp[i].result.halfTime) {
             temp[i].result.halfTime = { goalsHomeTeam: "N/A", goalsAwayTeam: "N/A" };
             console.log(temp.result);
            /* if (this.lastGames[i].result.odds == null) {
               this.lastGames[i].result.odds = { homeWin: "N/A", awayWin: "N/A", draw: "N/A" };
             }
     
       } */
    };
    LastGameComponent.prototype.getLastGames = function () {
        var _this = this;
        this.teamService.getLastGame().subscribe(function (temp) { return _this.parseGames(temp); }, function (err) { return console.log(err); }, function () { return console.log(); });
    };
    /*let game = this.lastGames;
    console.log(game);
    for(let i=0; i< game.length; i++){
      game[i].date=new Date(game[i].date);
   console.log("date");
 }*/
    LastGameComponent.prototype.ngOnInit = function () {
        this.getLastGames();
        /*console.log("i'm running!");
       
      this.support(this.lastGames);
       let game = this.lastGames;
       console.log(game);
       for(let i=0; i<game.length; i++){
         game[i].date=new Date(game[i].date);
         console.log("date");
         /*if(!game[i].result.halfTime){
           game[i].result.halfTime={goalsHomeTeam:"N/A",goalsAwayTeam:"N/A"};
         }
         if(!game[i].odds){
           game[i].odds={homeWin:"N/A",awayWin:"N/A",draw:"N/A"};
         }*/
        //this.lastGames=[game[game.length-1]];
        //console.log(game);
        /* $.ajax({
           headers: { 'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a' },
           url: 'http://api.football-data.org/v1/teams/445/fixtures?timeFrame=p5',
           dataType: 'json',
           type: 'GET',
         }).done(function(response) {
           // do something with the response, e.g. isolate the id of a linked resource
           var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
           //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
           //var teamId = res[1];
           response=response.fixtures[0]['_links']['competition'];
           console.log(response);
         });
           
        /*
         var number, all = 0;{{result['_links]}}
         var number, i = 0;
         var number, f = 0;
                $.each(response, function(i, f) {
              all+=1;
              });
            sole.log(g
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
                 var number, i;
                if(  i >= ( all - 1 )){
                 $(tblRow).appendTo("#datdata tbody");
               }
              });
         
              <table>
             
              <tr *ngFor= "let team of teams">
              <td> team.crstURl</td>
              <td> </td>
              </tr>
              </table>
     
            
         
           
           //response['standing']['0']['wins']
           
           
           //IF F.STATUS === FINISHED THEN SHOW IF NOT DONT SHOW ONLY SHOW LAST GAME THERE CAN BE TIMED GAMES WE DONT WANT THAT-->
           
           
         });
     */
    };
    LastGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-last-game',
            template: __webpack_require__("./src/app/last-game/last-game.component.html"),
            styles: [__webpack_require__("./src/app/last-game/last-game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], LastGameComponent);
    return LastGameComponent;
}());



/***/ }),

/***/ "./src/app/league-table/league-table.component.css":
/***/ (function(module, exports) {

module.exports = "tr, th {\n    text-align: center;\n    padding: 40px;\n}\n\ntd{\n    text-align: center;\n    padding: 10px;\n}\n\ntr:nth-child(even){background-color: #0063A6}\n\ntr:nth-child(odd){background-color: rgb(4, 153, 253)}\n\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    height: 586px;\n    overflow-x:20px;\n    overflow-y:30px;\n    border-spacing: 0;\n    max-width: 100%;\n    max-height: 1000px;\n    display: block;\n}\n\ndiv { \n    overflow-y:auto;\n    overflow-x:auto;\n    \n    }\n\n/*\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    height: 400px;\n    overflow-x:20px;\n    overflow-y:30px;\n    border-spacing: 0;\n    max-width: 100%;\n    max-height: 1000px;\n    display: block;\n}\n\ndiv { \n    overflow-y:auto;\n    overflow-x:auto;\n    \n    }*/\n\n\n\n\n\n\n\n\n\n\n\n    "

/***/ }),

/***/ "./src/app/league-table/league-table.component.html":
/***/ (function(module, exports) {

module.exports = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-5776421978150971\",\n    enable_page_level_ads: true\n  });\n</script>\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n<div id=\"ChildDiv\">\n\t\n\t\n\t\n\t<table>\n\t\t<tr>\n\t\t\t<th>Position</th>\n\t\t\t<th>Team Name</th>\n\t\t\t<th>Crest</th>\n\t\t\t<th>Played Games</th>\n\t\t\t<th>Points</th>\n\t\t\t<th>Goals</th>\n\t\t\t<th>Goals Against</th>\n\t\t\t<th>Goal Difference</th>\n\t\t\t<th>Wins</th>\n\t\t\t<th>Draws</th>\n\t\t\t<th>Losses</th>\n\t\t\t<th>Home Goals</th>\n\t\t\t<th>Home Goals Against</th>\n\t\t\t<th>Home Wins</th>\n\t\t\t<th>Home Draws</th>\n\t\t\t<th>Home Losses</th>\n\t\t\t<th>Away Goals</th>\n\t\t\t<th>Away Goals Against</th>\n\t\t\t<th>Away Wins</th>\n\t\t\t<th>Away Draws</th>\n\t\t\t<th>Away Losses</th>\n\t\t\t \n\t\t</tr>\n\t\t\n\n\t\t<tr *ngFor=\"let leagueTable of leagueTables.standing\">\n\t\t\t<td> {{leagueTable.position}} </td>\n\t\t\t<td> {{leagueTable.teamName}}</td>\n\t\t\t<td> <img src=\"{{leagueTable.crestURI}}\" alt=\"No IMG supplied for this team in json data\" height=100 width=100/> </td>\n\t\t\t<td> {{leagueTable.playedGames}} </td>\n\t\t\t<td> {{leagueTable.points}} </td>\n\t\t\t<td> {{leagueTable.goals}} </td>\n\t\t\t<td> {{leagueTable.goalsAgainst}} </td>\n\t\t\t<td> {{leagueTable.goalDifference}} </td>\n\t\t\t<td> {{leagueTable.wins}} </td>\n\t\t\t<td> {{leagueTable.draws}} </td>\n\t\t\t<td> {{leagueTable.losses}} </td>\n\t\t\t<td> {{leagueTable.home.goals}} </td>\n\t\t\t<td> {{leagueTable.home.goalsAgainst}}</td>\n\t\t\t<td> {{leagueTable.home.wins}} </td>\n\t\t\t<td> {{leagueTable.home.draws}} </td>\n\t\t\t<td> {{leagueTable.home.losses}} </td>\n\t\t\t<td> {{leagueTable.away.goals}} </td>\n\t\t\t<td> {{leagueTable.away.goalsAgainst}} </td>\n\t\t\t<td> {{leagueTable.away.wins}} </td>\n\t\t\t<td> {{leagueTable.away.draws}} </td>\n\t\t\t<td> {{leagueTable.away.losses}} </td>\n\t\t\t\n\t\t\t\n\t\t</tr>\n\t\t\n\t</table>\n\n\n</div>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<!--<div class=\"wrapper\">\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>position</th>\n\t<th>teamName</th>\n\t<th>crestURI</th>\n\t<th>playedGames</th>\n\t<th>points</th>\n\t<th>goals</th>\n\t<th>goalsAgainst</th>\n\t<th>goalDifference</th>\n\t<th>wins</th>\n\t<th>draws</th>\n\t<th>losses</th>\n\t<th>home.goals</th>\n\t<th>home.goalsAgainst</th>\n\t<th>home.wins</th>\n\t<th>home.draws</th>\n\t<th>home.losses </th>\n\t<th>away.goals</th>\n\t<th>away.goalsAgainst</th>\n\t<th>away.wins</th>\n\t<th>away.draws</th>\n\t<th>away.losses </th>\n\t\n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>-->\n \n\n\n\n"

/***/ }),

/***/ "./src/app/league-table/league-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeagueTableComponent = /** @class */ (function () {
    function LeagueTableComponent(teamService) {
        this.teamService = teamService;
    }
    //constructor() { }
    LeagueTableComponent.prototype.parseGames = function (temp) {
        this.leagueTables = temp;
        //console.log(temp['fixtures']);
        var x = temp['standing'];
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var t = x_1[_i];
            //console.log(t.date);
            //t.date = new Date(t.date);
            //console.log(t.result['odds']);*/
            console.log("1");
            /*if (t.squadMarketValue != null) {
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
      */
            if (t.crestURI != "" && t.crestURI != null) {
                console.log(t.crestUrl);
                console.log("2");
            }
            else {
                t.crestURI = "https://www.readjunk.com/wp-content/uploads/2015/09/no-image-found1-300x200.png";
                console.log("3");
            }
            /* if (t.crestURI != null) { //WTFFFFFFFFFFFFF
               console.log(t.crestURI);
               console.log("2");
             }
             else{
               t.crestURI = "https://www.readjunk.com/wp-content/uploads/2015/09/no-image-found1-300x200.png";
               console.log("3");
             } */
        }
        //this.allPlayerss['fixtures']=[x[x.length-1]];
        //console.log(this.allPlayerss)
    };
    LeagueTableComponent.prototype.getLeagueTable = function () {
        var _this = this;
        this.teamService.getLeagueTable().subscribe(function (temp) { return _this.parseGames(temp); }, function (err) { return console.log(err); }, function () { return console.log(); });
    };
    LeagueTableComponent.prototype.ngOnInit = function () {
        console.log("i'm running!");
        this.getLeagueTable();
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
           url: 'http://api.football-data.org/v1/competitions/459/leagueTable',
           dataType: 'json',
           type: 'GET',
         }).done(function(response) {
           // do something with the response, e.g. isolate the id of a linked resource
           var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
           //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
           //var teamId = res[1];
           console.log(response);
           
          
         
            
                $.each(response.standing, function(i, f) {
                   var tblRow = "<tr>" + "<td>" + f.position + "</td>" + "<td>" + f.teamName + "</td>"  +
               "<td>" + "<img src= " + f.crestURI + " height=100 width=100></img>"+"</td>" +
               "<td>" + f.playedGames + "</td>" + "<td>" + f.points + "</td>" + "<td>" + f.goals + "</td>" +
               "<td>" + f.goalsAgainst + "</td>" + "<td>" + f.goalDifference + "</td>" + "<td>" + f.wins + "</td>" +
               "<td>" + f.draws + "</td>" + "<td>" + f.losses + "</td>" + "<td>" + f.home.goals + "</td>" +
               "<td>" + f.home.goalsAgainst + "</td>" + "<td>" + f.home.wins + "</td>" + "<td>" + f.home.draws + "</td>" +
               "<td>" + f.home.losses + "</td>" + "<td>" + f.away.goals + "</td>" + "<td>" + f.away.goalsAgainst + "</td>" +
               "<td>" + f.away.wins + "</td>" + "<td>" + f.away.draws + "</td>" +"<td>" + f.away.losses + "</td>" + "</tr>"
                    $(tblRow).appendTo("#datdata tbody");
              });
         
            
            
         
           
           
           
           
           
           
         }); */
    };
    LeagueTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-league-table',
            template: __webpack_require__("./src/app/league-table/league-table.component.html"),
            styles: [__webpack_require__("./src/app/league-table/league-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], LeagueTableComponent);
    return LeagueTableComponent;
}());



/***/ }),

/***/ "./src/app/my-team/my-team.component.css":
/***/ (function(module, exports) {

module.exports = "/*table {\n    border-collapse: collapse;\n    width: 100%;\n\ttext-align: center;\n}\n*/\ntr {\n    text-align: center;\n    padding: 10px;\n}\nth {\n    text-align: center;\n    padding: 90px;\n}\ntd{\n    text-align: center;\n    padding: 60px;\n}\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    height: 475px;\n    overflow-x:20px;\n    overflow-y:30px;\n    border-spacing: 0;\n    max-width: 1000%;\n    max-height: 1000px;\n    display: block;\n}\ndiv { \n    overflow-y:auto;\n    overflow-x:auto;\n    \n    }\ntr:nth-child(even){background-color: #0063A6}\ntr:nth-child(odd){background-color: rgb(4, 153, 253)}\n/*\n    table {\n        border-collapse: collapse;\n        width: 100%;\n        height: 586px;\n        overflow-x:20px;\n        overflow-y:30px;\n        border-spacing: 0;\n        max-width: 100%;\n        max-height: 1000px;\n        display: block;\n    }\n    \n    div { \n        overflow-y:auto;\n        overflow-x:auto;\n        \n        }\n    */\n"

/***/ }),

/***/ "./src/app/my-team/my-team.component.html":
/***/ (function(module, exports) {

module.exports = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-5776421978150971\",\n    enable_page_level_ads: true\n  });\n</script>\n\n\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n<div id=\"ChildDiv\">\n\n  <table>\n    <tr>\n      <th>Name</th>\n      <th>Code</th>\n      <th>Short Name</th>\n      <th>Squad Market Value</th>\n      <th>Crest</th>\n\n    </tr>\n\n\n    <!--<tr *ngFor=\"let myTeam of myTeams\"-->\n    <tr>\n      <td> {{myTeams.name}} </td>\n      <td> {{myTeams.code}}</td>\n      <td> {{myTeams.shortName}} </td>\n      <!--<td *ngIf=\"myTeams.squadMarketValue == null\"> {{\"N/A\"}} </td> -->\n     <td> {{myTeams.squadMarketValue}} </td>\n      <td>\n        <img src=\"{{myTeams.crestUrl}}\" alt=\"No IMG supplied for this team in json data\" height=100 width=100/> </td>\n\n\n    </tr>\n\n  </table>\n\n\n</div>\n\n<!--<div class=\"wrapper\" style=\"overflow-x:auto;\">\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>name</th>\n\t<th>code</th>\n\t<th>shortName</th>\n\t<th>squadMarketValue</th>\n\t<th>crestUrl</th>\n\t\n\t\n\t\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>-->"

/***/ }),

/***/ "./src/app/my-team/my-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyTeamComponent = /** @class */ (function () {
    function MyTeamComponent(teamService) {
        this.teamService = teamService;
    }
    MyTeamComponent.prototype.parseGames = function (temp) {
        this.myTeams = temp;
        //console.log(temp['fixtures']);
        var x = temp;
        //console.log(t.date);
        //console.log(t.result['odds']);
        if (x.squadMarketValue != null) {
            console.log(x);
        }
        else {
            x.squadMarketValue = "N/A";
        }
    };
    MyTeamComponent.prototype.getMyTeam = function () {
        var _this = this;
        this.teamService.getMyTeam().subscribe(function (temp) { return _this.parseGames(temp); }, function (err) { return console.log(err); }, function () { return console.log(); });
    };
    MyTeamComponent.prototype.ngOnInit = function () {
        console.log("i'm running!");
        this.getMyTeam();
        //let game = 
        /*
          if(game[0].squadMarketValue == 'null'){
            game[0].squadMarketValue={squadMarketValue:"N/A"};
          }*/
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
    };
    MyTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-team',
            template: __webpack_require__("./src/app/my-team/my-team.component.html"),
            styles: [__webpack_require__("./src/app/my-team/my-team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], MyTeamComponent);
    return MyTeamComponent;
}());



/***/ }),

/***/ "./src/app/navheader/navheader.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navheader/navheader.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navheader/navheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavheaderComponent = /** @class */ (function () {
    function NavheaderComponent() {
    }
    NavheaderComponent.prototype.ngOnInit = function () {
    };
    NavheaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navheader',
            template: __webpack_require__("./src/app/navheader/navheader.component.html"),
            styles: [__webpack_require__("./src/app/navheader/navheader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavheaderComponent);
    return NavheaderComponent;
}());



/***/ }),

/***/ "./src/app/performance/performance.component.css":
/***/ (function(module, exports) {

module.exports = "/*table {\n    \n    border-collapse: collapse;\n    width: 100%;\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n\n}\n*/tr, th {\n    text-align: center;\n    padding: 40px;\n}td{\n    text-align: center;\n    padding: 10px;\n}tr:nth-child(even){background-color: #0063A6}tr:nth-child(odd){background-color: rgb(4, 153, 253)}table {\n    border-collapse: collapse;\n    width: 100%;\n    height: 586px;\n    overflow-x:20px;\n    overflow-y:30px;\n    border-spacing: 0;\n    max-width: 100%;\n    max-height: 1000px;\n    display: block;\n}div { \n    overflow-y:auto;\n    overflow-x:auto;\n    \n    }"

/***/ }),

/***/ "./src/app/performance/performance.component.html":
/***/ (function(module, exports) {

module.exports = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-5776421978150971\",\n    enable_page_level_ads: true\n  });\n</script>\n\n<!--<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-6977942731603442\",\n    enable_page_level_ads: true\n  });\n</script>\n<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"> </script>\n-->\n<!-- <div id=\"piechart\"></div>               \n<script type=\"text/javascript\">\nconsole.log(\"help\");\n\t// Load google charts\n\tgoogle.charts.load('current', {'packages':['corechart']});\n\tgoogle.charts.setOnLoadCallback(drawChart);\n\tconsole.log(\"help\");\n\t// Draw the chart and set the chart values\n\tfunction drawChart() {\n\t  var data = google.visualization.arrayToDataTable([\n\t  ['Task', 'Hours per Day'],\n\t  ['Work', 8],\n\t  ['Friends', 2],\n\t  ['Eat', 2],\n\t  ['TV', 3],\n\t  ['Gym', 2],\n\t  ['Sleep', 7]\n\t]);\n\t\n\t  // Optional; add a title and set the width and height of the chart\n\t  var options = {'title':'My Average Day', 'width':400, 'height':300};\n\t\n\t  // Display the chart inside the <div> element with id=\"piechart\"\n\t  var chart = new google.visualization.PieChart(document.getElementById('piechart'));\n\t  chart.draw(data, options);\n\t}\n\t</script>\n-->\n\n\n\n<!--<head>\n<title>My first chart using FusionCharts Suite XT</title>\n<script type=\"text/javascript\" src=\"/src/fusioncharts/f\"></script>\n<script type=\"text/javascript\" src=\"fusioncharts/js/themes/fusioncharts.theme.fint.js\"></script>\n<script type=\"text/javascript\">\n\tFusionCharts.ready(function() {\n\t\tvar revenueChart = new FusionCharts({\n\t\t\t\"type\": \"column2d\",\n\t\t\t\"renderAt\": \"chartContainer\",\n\t\t\t\"width\": \"500\",\n\t\t\t\"height\": \"300\",\n\t\t\t\"dataFormat\": \"json\",\n\t\t\t\"dataSource\": {\n\t\t\t\t\"chart\": {\n\t\t\t\t\t\"caption\": \"Monthly revenue for last year\",\n\t\t\t\t\t\"subCaption\": \"Harry's SuperMart\",\n\t\t\t\t\t\"xAxisName\": \"Month\",\n\t\t\t\t\t\"yAxisName\": \"Revenues (In USD)\",\n\t\t\t\t\t\"theme\": \"fint\"\n\t\t\t\t},\n\t\t\t\t\"data\": [{\n\t\t\t\t\t\t\"label\": \"Jan\",\n\t\t\t\t\t\t\"value\": \"420000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Feb\",\n\t\t\t\t\t\t\"value\": \"810000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Mar\",\n\t\t\t\t\t\t\"value\": \"720000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Apr\",\n\t\t\t\t\t\t\"value\": \"550000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"May\",\n\t\t\t\t\t\t\"value\": \"910000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Jun\",\n\t\t\t\t\t\t\"value\": \"510000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Jul\",\n\t\t\t\t\t\t\"value\": \"680000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Aug\",\n\t\t\t\t\t\t\"value\": \"620000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Sep\",\n\t\t\t\t\t\t\"value\": \"610000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Oct\",\n\t\t\t\t\t\t\"value\": \"490000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Nov\",\n\t\t\t\t\t\t\"value\": \"900000\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"label\": \"Dec\",\n\t\t\t\t\t\t\"value\": \"730000\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\n\t\t});\n\t\trevenueChart.render();\n\t})\n</script>\n</head>\n\n<body>\n<div id=\"chartContainer\">FusionCharts XT will load here!</div>\n</body>-->\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n\n<!--<div *ngIf=\"chart\">\n\t<canvas id=\"canvas\" width=\"400\" height=\"400\">{{ chart }}</canvas>-->\n<!--<canvas id=\"myChart\" class=\"chart\" width=\"400\" height=\"400\"></canvas>-->\n<!--</div>-->\n\n\n<div id=\"ChildDiv\">\n\t\n\t<table>\n\t\t<tr>\n\t\t\t<th>Date</th>\n\t\t\t<th>Status</th>\n\t\t\t<th>Match Day</th>\n\t\t\t<th>Home Team</th>\n\t\t\t<th>Away Team</th>\n\t\t\t<th>Goals Home Team</th>\n\t\t\t<th>Goals Away Team</th>\n\t\t\t<th>Halftime Home Goals</th>\n\t\t\t<th>Halftime Away Goals</th>\n\t\t\t<th>Odds Home</th>\n\t\t\t<th>Odds Draw</th>\n\t\t\t<th>Odds Away</th>\n\t\t</tr>\n\t\t\n\n\t\t<tr *ngFor=\"let performance of performances.fixtures\">\n\t\t\t<td> {{performance.date}} </td>\n\t\t\t<td> {{performance.status}}</td>\n\t\t\t<td> {{performance.matchday}}</td>\n\t\t\t<td> {{performance.homeTeamName}} </td>\n\t\t\t<td> {{performance.awayTeamName}} </td>\n\t\t\t<td> {{performance.result.goalsHomeTeam}} </td>\n\t\t\t<td> {{performance.result.goalsAwayTeam}} </td>\n\t\t\t<td> {{performance.result.halfTime.goalsHomeTeam}} </td>\n\t\t\t<td> {{performance.result.halfTime.goalsAwayTeam}} </td>\n\t\t\t<td> {{performance.odds.homeWin}} </td>\n\t\t\t<td> {{performance.odds.draw}} </td>\n\t\t\t<td> {{performance.odds.awayWin}} </td>\n\t\t\t\n\t\t</tr>\n\t\t\n\t</table>\n\n\n</div>\n\n<!--<div class=\"wrapper\" >\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>date</th>\n\t<th>status</th>\n\t<th>matchday</th>\n\t<th>homeTeamName</th>\n\t<th>awayTeamName</th>\t\n\t<th>goalsHomeTeam</th>\n\t<th>goalsAwayTeam</th>\n\t<th>halftimegoalsHomeTeam</th>\n\t<th>halftimeawaygoals</th>\n\t<th>oddshomeWin</th>\n\t<th>oddsdraw</th>\n\t<th>oddsawayWin</th>\n\t\n\t\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>-->\n \n\n"

/***/ }),

/***/ "./src/app/performance/performance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//var Chart = require('chart.js');
var PerformanceComponent = /** @class */ (function () {
    // chart = [];
    function PerformanceComponent(teamService) {
        this.teamService = teamService;
    }
    //constructor() { }
    PerformanceComponent.prototype.parseGames = function (temp) {
        this.performances = temp;
        //console.log(temp['fixtures']);
        var x = temp['fixtures'];
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var t = x_1[_i];
            //console.log(t.date);
            t.date = new Date(t.date);
            //console.log(t.result['odds']);
            if (t.odds != null) {
                console.log(t.odds);
            }
            else {
                t.odds = { homeWin: "N/A", awayWin: "N/A", draw: "N/A" };
            }
        }
        this.performances['fixtures'] = x.slice(x.length - 5);
        console.log(this.performances);
    };
    PerformanceComponent.prototype.getPerformance = function () {
        var _this = this;
        this.teamService.getPerformance().subscribe(function (temp) { return _this.parseGames(temp); }, function (err) { return console.log(err); }, function () { return console.log(); });
    };
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
    PerformanceComponent.prototype.ngOnInit = function () {
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
    };
    PerformanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-performance',
            template: __webpack_require__("./src/app/performance/performance.component.html"),
            styles: [__webpack_require__("./src/app/performance/performance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], PerformanceComponent);
    return PerformanceComponent;
}());



/***/ }),

/***/ "./src/app/season/season.component.css":
/***/ (function(module, exports) {

module.exports = "\ntr, th {\n    text-align: center;\n    padding: 40px;\n}\n\ntd{\n    text-align: center;\n    padding: 10px;\n}\n\ntr:nth-child(even){background-color: #0063A6}\n\ntr:nth-child(odd){background-color: rgb(4, 153, 253)}\n\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    height: 586px;\n    overflow-x:20px;\n    overflow-y:30px;\n    border-spacing: 0;\n    max-width: 100%;\n    max-height: 1000px;\n    display: block;\n}\n\ndiv { \n    overflow-y:auto;\n    overflow-x:auto;\n    \n    }"

/***/ }),

/***/ "./src/app/season/season.component.html":
/***/ (function(module, exports) {

module.exports = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-5776421978150971\",\n    enable_page_level_ads: true\n  });\n</script>\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n<div id=\"ChildDiv\">\n\t\n\t<table>\n\t\t<tr>\n\t\t\t<th>Date</th>\n\t\t\t<th>Status</th>\n\t\t\t<th>Match Day</th>\n\t\t\t<th>Home Team</th>\n\t\t\t<th>Away Team</th>\n\t\t\t<th>Goals Home</th>\n\t\t\t<th>Goals Away</th>\n\t\t\t<th>Halftime Home</th>\n\t\t\t<th>Halftime Away</th>\n\t\t\t<th>Odds Home</th>\n\t\t\t<th>Odds Draw</th>\n\t\t\t<th>Odds Away</th>\n\t\t</tr>\n\t\t\n\n\t\t<tr *ngFor=\"let season of seasons.fixtures\">\n\t\t\t<td> {{season.date}} </td>\n\t\t\t<td> {{season.status}}</td>\n\t\t\t<td> {{season.matchday}}</td>\n\t\t\t<td> {{season.homeTeamName}} </td>\n\t\t\t<td> {{season.awayTeamName}} </td>\n\t\t\t<td> {{season.result.goalsHomeTeam}} </td>\n\t\t\t<td> {{season.result.goalsAwayTeam}} </td>\n\t\t\t<td> {{season.result.halfTime.goalsHomeTeam}} </td>\n\t\t\t<td> {{season.result.halfTime.goalsAwayTeam}} </td>\n\t\t\t<td> {{season.odds.homeWin}} </td>\n\t\t\t<td> {{season.odds.draw}} </td>\n\t\t\t<td> {{season.odds.awayWin}} </td>\n\t\t\t\n\t\t</tr>\n\t\t\n\t</table>\n\n\n</div>\n\n<!--<div class=\"wrapper\" >\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>date</th>\n\t<th>status</th>\n\t<th>matchday</th>\n\t<th>homeTeamName</th>\n\t<th>awayTeamName</th>\t\n\t<th>goalsHomeTeam</th>\n\t<th>goalsAwayTeam</th>\n\t<th>halftimegoalsHomeTeam</th>\n\t<th>halftimeawaygoals</th>\n\t<th>oddshomeWin</th>\n\t<th>oddsdraw</th>\n\t<th>oddsawayWin</th>\n\t\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>\n \n\n<p>\n    Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\n    Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n    \n    Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n    \n    Left till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n    \n    On then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n    \n    Ladies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n    \n    Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n    \n    To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n    \n    You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n    \n    Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\n    Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\n</p>\n-->"

/***/ }),

/***/ "./src/app/season/season.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeasonComponent = /** @class */ (function () {
    function SeasonComponent(teamService) {
        this.teamService = teamService;
        this.contentLoad = false;
    }
    //constructor() { }
    SeasonComponent.prototype.parseGames = function (temp) {
        this.seasons = temp;
        //console.log(temp['fixtures']);
        var x = temp['fixtures'];
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var t = x_1[_i];
            //console.log(t.date);
            t.date = new Date(t.date);
            //console.log(t.result['odds']);
            if (t.odds != null) {
                console.log(t.odds);
            }
            else {
                t.odds = { homeWin: "N/A", awayWin: "N/A", draw: "N/A" };
            }
        }
        //this.seasons['fixtures']=x.slice(x.length-5);
        console.log(this.seasons);
    };
    SeasonComponent.prototype.getSeason = function () {
        var _this = this;
        this.teamService.getSeason().subscribe(function (temp) { return _this.parseGames(temp); }, function (err) { return console.log(err); }, function () { return console.log(); });
    };
    SeasonComponent.prototype.ngOnInit = function () {
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
    };
    SeasonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-season',
            template: __webpack_require__("./src/app/season/season.component.html"),
            styles: [__webpack_require__("./src/app/season/season.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]])
    ], SeasonComponent);
    return SeasonComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'true, Origin, X-Requested-With, Content-Type, Accept, origin, authorization, client-security-token',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, HEAD'
    })
};
var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', 'e0c7693a8b2f4529b4f2ba779d64ab4a');
var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.teamsUrl = 'https://api.football-data.org/v1';
    }
    /** GET teams from the server */
    TeamService.prototype.getLastGame = function () {
        return this.http.get(this.teamsUrl +
            '/teams/445/fixtures', { headers: headers });
    };
    TeamService.prototype.getAllPlayers = function () {
        return this.http.get(this.teamsUrl +
            '/teams/445/players', { headers: headers });
    };
    TeamService.prototype.getCompetitions = function () {
        return this.http.get(this.teamsUrl +
            '/competitions/459/teams/', { headers: headers });
    };
    TeamService.prototype.getHeadToHead = function () {
        return this.http.get(this.teamsUrl +
            '/teams/445/fixtures', { headers: headers });
    };
    TeamService.prototype.getLeagueTable = function () {
        return this.http.get(this.teamsUrl +
            '/competitions/459/leagueTable', { headers: headers });
    };
    TeamService.prototype.getMyTeam = function () {
        return this.http.get(this.teamsUrl +
            '/teams/445', { headers: headers });
    };
    TeamService.prototype.getPerformance = function () {
        return this.http.get(this.teamsUrl +
            '/teams/445/fixtures?timeFrame=p5', { headers: headers });
    };
    TeamService.prototype.getSeason = function () {
        return this.http.get(this.teamsUrl +
            '/teams/445/fixtures?season=2017', { headers: headers });
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map