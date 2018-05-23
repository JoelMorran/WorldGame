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

module.exports = "table {\n    border-collapse: collapse;\n    width: 100%;\n\ttext-align: center;\n}\n\nth {\n    text-align: center;\n    padding: 8px;\n}\n\ntr:nth-child(even){background-color: #f2f2f2}"

/***/ }),

/***/ "./src/app/all-players/all-players.component.html":
/***/ (function(module, exports) {

module.exports = "\n<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-6977942731603442\",\n    enable_page_level_ads: true\n  });\n</script>\n<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"> </script>\n\n<script>\n\n</script>\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n\n<div class=\"wrapper\" style=\"overflow-x:auto;\">\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>name</th>\n\t<th>position</th>\n\t<th>jerseyNumber</th>\n\t<th>dateOfBirth</th>\n\t<th>nationality</th>\n\t<th>contractUntil</th>\n\t<th>marketValue</th>\n\t\n\t\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>\n \n\n"

/***/ }),

/***/ "./src/app/all-players/all-players.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPlayersComponent; });
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

var AllPlayersComponent = /** @class */ (function () {
    function AllPlayersComponent() {
    }
    AllPlayersComponent.prototype.ngOnInit = function () {
        $.ajax({
            headers: { 'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a' },
            url: 'http://api.football-data.org/v1/teams/445/players',
            dataType: 'json',
            type: 'GET',
        }).done(function (response) {
            // do something with the response, e.g. isolate the id of a linked resource        
            var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
            //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
            //var teamId = res[1];
            console.log(response);
            $.each(response.players, function (i, f) {
                var tblRow = "<tr>" + "<td>" + f.name + "</td>" + "<td>" + f.position + "</td>" + "<td>" + f.jerseyNumber +
                    "</td>" + "<td>" + f.dateOfBirth + "</td>" +
                    "<td>" + f.nationality + "</td>" + "<td>" + f.contractUntil + "</td>" +
                    "<td>" + f.marketValue + "</td>" + "</tr>";
                $(tblRow).appendTo("#datdata tbody");
            });
        });
    };
    AllPlayersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all-players',
            template: __webpack_require__("./src/app/all-players/all-players.component.html"),
            styles: [__webpack_require__("./src/app/all-players/all-players.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 500%;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n /* font-size: 2em; */\n  margin-top: 0;\n  padding-top: 0;\n}\nh3 {\n   /*font-size: 5em; */\n  margin-top: 0;\n  float: left; \n  margin-left: 10px;\n\n}\nh4 {\n /* font-size: 3em; */\n  margin-top: 100px;\n  padding-top: 0px;\n  /*text-align: left; */\n  color: blue;\n  float: left;\n}\n#one{\n  float: left;\n  width: 200px;\n  height: 200px;\n \n}\n#two{\n  float: right;\n  width: 200px;\n  height: 200px; \n}\n/*.header img {\n  float: left;\n  width: 30px;\n  \n}*/\n#five {\n  font-size: 600%;\n  text-align: center;\n  font: bold;\n  \n}\n#three{\n  font-size: 315%;\n  color: blue;\n  padding-top: 75px;\n}\n/*#four {\n  float: right;\n}*/\n#seven {\n  background-image: url(\"http://www.greenlogic.net.au/wp-content/uploads/2017/07/grass-background-28-1024x640.jpg\");\n}\n.teamName {\n  float: left;\n  margin-top: 20px;\n}\nul.sidenav {\n  list-style-type: none;\n  margin-top: 0px;\n  padding: 0;\n  width: 16.5%;\n  background-color: #f1f1f1;\n  position: fixed;\n  height: 100%;\n  overflow: auto; \n  background-image: url(\"http://www.greenlogic.net.au/wp-content/uploads/2017/07/grass-background-28-1024x640.jpg\");\n\n}\nul.sidenav li a {\n  display: block;\n  color: #000;\n  padding: 8px 16px;\n  text-decoration: none;\n}\nul.sidenav li a.active {\n  background-color: #4CAF50;\n  color: white;\n}\nul.sidenav li a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\ndiv.content {\n  margin-left: 25%;\n  padding: 1px 16px;\n  height: 1000px;\n}\n@media screen and (max-width: 900px) {\n  ul.sidenav {\n      width: 100%;\n      height: auto;\n      position: relative;\n  }\n  ul.sidenav li a {\n      float: left;\n      padding: 15px;\n  }\n  div.content {margin-left: 0;}\n}\n@media screen and (max-width: 400px) {\n  ul.sidenav li a {\n      text-align: center;\n      float: none;\n  }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n<!--<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n     (adsbygoogle = window.adsbygoogle || []).push({\n          google_ad_client: \"ca-pub-6977942731603442\",\n          enable_page_level_ads: true\n     });\n</script>-->\n</head>\n<div id=\"seven\">\n  <div class=\"row\" id=\"six\">\n    <div class=\"col-sm-3\">\n      <img id=\"one\" alt=\"Angular Logo\" src=\"http://upload.wikimedia.org/wikipedia/de/4/42/Logo_FC_Empoli.svg\" />\n    </div>\n\n    <div class=\"col-sm-6\" id=\"five\">Elite Scoccer Broadcast</div>\n\n    <div class=\"col-sm-3\">\n      <img id=\"two\" alt=\"Angular Logo\" src=\"http://upload.wikimedia.org/wikipedia/de/4/42/Logo_FC_Empoli.svg\" />\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n\n      <p id=\"three\">Empoli FC</p>\n\n      <ul class=sidenav>\n        <li>\n          <a routerLink=\"/myteam\" routerLinkActive=\"active\">My Team</a>\n        </li>\n        <li>\n          <a routerLink=\"/allplayers\" routerLinkActive=\"active\">All Players</a>\n        </li>\n        <li>\n          <a routerLink=\"/competitions\" routerLinkActive=\"active\">Competitions</a>\n        </li>\n        <li>\n          <a routerLink=\"/headtohead\" routerLinkActive=\"active\">Head To Head</a>\n        </li>\n        <li>\n          <a routerLink=\"/lastgame\" routerLinkActive=\"active\">Last Game</a>\n        </li>\n        <li>\n          <a routerLink=\"/leaguetable\" routerLinkActive=\"active\">League Table</a>\n        </li>\n        <li>\n          <a routerLink=\"/performance\" routerLinkActive=\"active\">Performace</a>\n        </li>\n        <li>\n          <a routerLink=\"/season\" routerLinkActive=\"active\">Season</a>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class=\"col-sm-8\">\n      <br>\n      <br>\n      <br>\n      <br>\n      <p id=\"four\">test\n        <router-outlet></router-outlet>\n      </p>\n\n    </div>\n    <div class=\"col-sm-2\"></div>\n  </div>\n</div>"

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

module.exports = "table {\n    border-collapse: collapse;\n    width: 100%;\n\ttext-align: center;\n}\n\nth {\n    text-align: center;\n    padding: 8px;\n}\n\ntr:nth-child(even){background-color: #f2f2f2}"

/***/ }),

/***/ "./src/app/competitions/competitions.component.html":
/***/ (function(module, exports) {

module.exports = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-6977942731603442\",\n    enable_page_level_ads: true\n  });\n</script>\n<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"> </script>\n\n<script>\n\n</script>\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n\n<div class=\"wrapper\" style=\"overflow-x:auto;\">\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>name</th>\n\t<th>code</th>\n\t<th>shortName</th>\n\t<th>squadMarketValue</th>\n\t<th>crestUrl</th>\n\t\n\t\n\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>\n \n\n"

/***/ }),

/***/ "./src/app/competitions/competitions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsComponent; });
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

var CompetitionsComponent = /** @class */ (function () {
    function CompetitionsComponent() {
    }
    CompetitionsComponent.prototype.ngOnInit = function () {
        $.ajax({
            headers: { 'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a' },
            url: 'http://api.football-data.org/v1/competitions/459/teams/',
            dataType: 'json',
            type: 'GET',
        }).done(function (response) {
            // do something with the response, e.g. isolate the id of a linked resource        
            var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
            //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
            //var teamId = res[1];
            console.log(response);
            $.each(response.teams, function (i, f) {
                var tblRow = "<tr>" + "<td>" + f.name + "</td>" + "<td>" + f.code + "</td>" + "<td>" + f.shortName +
                    "</td>" + "<td>" + f.squadMarketValue + "</td>" + "<td>" + "<img src= " + f.crestUrl + " height=100 width=100></img>" + "</td>" + "</tr>";
                $(tblRow).appendTo("#datdata tbody");
            });
        });
    };
    CompetitionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-competitions',
            template: __webpack_require__("./src/app/competitions/competitions.component.html"),
            styles: [__webpack_require__("./src/app/competitions/competitions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompetitionsComponent);
    return CompetitionsComponent;
}());



/***/ }),

/***/ "./src/app/head-to-head/head-to-head.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/head-to-head/head-to-head.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  head-to-head works!\n</p>\n"

/***/ }),

/***/ "./src/app/head-to-head/head-to-head.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadToHeadComponent; });
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

var HeadToHeadComponent = /** @class */ (function () {
    function HeadToHeadComponent() {
    }
    HeadToHeadComponent.prototype.ngOnInit = function () {
    };
    HeadToHeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-head-to-head',
            template: __webpack_require__("./src/app/head-to-head/head-to-head.component.html"),
            styles: [__webpack_require__("./src/app/head-to-head/head-to-head.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadToHeadComponent);
    return HeadToHeadComponent;
}());



/***/ }),

/***/ "./src/app/last-game/last-game.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    border-collapse: collapse;\n    width: 100%;\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even){background-color: #f2f2f2}"

/***/ }),

/***/ "./src/app/last-game/last-game.component.html":
/***/ (function(module, exports) {

module.exports = "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n\t(adsbygoogle = window.adsbygoogle || []).push({\n\t\tgoogle_ad_client: \"ca-pub-6977942731603442\",\n\t\tenable_page_level_ads: true\n\t});\n</script>\n<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"> </script>\n\n<div id=\"ChildDiv\">\n\t\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<th>date</th>\n\t\t\t\t<th>status</th>\n\t\t\t\t<th>matchday</th>\n\t\t\t\t<th>homeTeamName</th>\n\t\t\t\t<th>awayTeamName</th>\n\t\t\t\t<th>goalsHomeTeam</th>\n\t\t\t\t<th>goalsAwayTeam</th>\n\t\t\t\t<th>halftimegoalsHomeTeam</th>\n\t\t\t\t<th>halftimeawaygoals</th>\n\t\t\t\t<th>oddshomeWin</th>\n\t\t\t\t<th>oddsdraw</th>\n\t\t\t\t<th>oddsawayWin</th>\n\t\t\t</tr>\n\t\t\t\n\n\t\t\t<tr *ngFor=\"let lastGame of lastGames.fixtures\">\n\t\t\t\t<td> {{lastGame.date}} </td>\n\t\t\t\t<td> {{lastGame.status}}</td>\n\t\t\t\t<td> {{lastGame.homeTeamName}} </td>\n\t\t\t\t<td> {{lastGame.awayTeamName}} </td>\n\t\t\t\t<td> {{lastGame.result.goalsHomeTeam}} </td>\n\t\t\t\t<td> {{lastGame.result.goalsAwayTeam}} </td>\n\t\t\t\t<td> {{lastGame.result.halfTime.goalsHomeTeam}} </td>\n\t\t\t\t<td> {{lastGame.result.halfTime.goalsAwayTeam}} </td>\n\t\t\t\t<td> {{lastGame.odds.homeWin}} </td>\n\t\t\t\t<td> {{lastGame.odds.draw}} </td>\n\t\t\t\t<td> {{lastGame.odds.awayWin}} </td>\n\t\t\t\t\n\t\t\t\t\n\n\n\n\n\n\n\n\t\t\t\t<!--<td *ngIf=\"lastGame.result.halfTime != null\"> {{lastGame.result.halfTime}} </td> \n\t\t\t\t\t<td> {{lastGame.result.halfTime.goalsAwayTeam}}; </td> <td>\n\t\t\t\t\t\n\t\t\t\t<td *ngIf=\"lastGame.result.halfTime == null\">\t\n\t\t\t\t\t\n\t\t\t\t\t {{\"N/A\"}} </td> <td> {{\"N/A\"}} </td> <td>;\n\t\t\t\t\n\t\t\t\t\t*ngIf={{lastGame.odds}}; then {{lastGame.odds.homeWin}} </td>\n\t\t\t\t\t <td> {{lastGame.odds.draw}} </td> <td> {{lastGame.odds.awayWin}} </td> </tr>;\n\t\t\t\t\t\t\n\t\t\t\t\telse {{\"N/A\"}} </td> <td> {{\"N/A\"}} </td> <td> {{\"N/A\"}} </td> </tr>;\n\t\t\t\t\t\t\n\t\t\t\t\t *ngIf(  i >= ( all - 1 )){\n\t\t\t\t\t\t$(tblRow).appendTo(\"tr\");\n\t\t\t\t\t}-->\n\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<!--<td><img src=\"{{team.crestURL}}\" /> </td>-->\n\t\t\t</tr>\n\t\t\t\n\t\t</table>\n\n\t\n</div>\n\n<!--\n\t\t\t $.each(response, function(i, f) {\n\t\t all+=1;\n\t\t });\n\t \n\t\t\t $.each(response, function(i, f) {\n\t\t// console.log(f);\n\t\t// console.log(f.result);\n\t\t\t\t\tvar tblRow = \"<tr>\" + \"<td>\" + new Date(f.date) + \"</td>\" + \"<td>\" + f.status + \"</td>\" + \"<td>\" + f.matchday + \n\t\t\t \"</td>\" + \"<td>\" + f.homeTeamName + \"</td>\" +\n\t\t\t \"<td>\" + f.awayTeamName + \"</td>\" + \"<td>\" + f.result.goalsHomeTeam + \"</td>\" + \"<td>\" + f.result.goalsAwayTeam + \"</td>\" +\n\t\t\t \"<td>\";\n\t\t\tif(f.result.halfTime){\n\t\t\t\ttblRow+=\n\t\t\t f.result.halfTime.goalsHomeTeam + \"</td>\" + \"<td>\" + f.result.halfTime.goalsAwayTeam + \"</td>\" +\"<td>\";\n\t\t\t\t}\n\t\t\telse{\n\t\t\t\ttblRow+=\n\t\t\t \"N/A\" + \"</td>\" + \"<td>\" + \"N/A\" + \"</td>\" +\"<td>\";\n\t\t\t\t}\n\t\t\tif(f.odds){\n\t\t\t\ttblRow+=f.odds.homeWin + \"</td>\" + \"<td>\" + f.odds.draw + \"</td>\" + \"<td>\" + f.odds.awayWin + \"</td>\" + \"</tr>\";\n\t\t\t\t}\n\t\t\telse{\n\t\t\t\ttblRow+=\"N/A\" + \"</td>\" + \"<td>\" + \"N/A\" + \"</td>\" + \"<td>\" + \"N/A\" + \"</td>\" + \"</tr>\";\n\t\t\t\t}\n\t\t\t\tvar number, i;\n\t\t\t if(  i >= ( all - 1 )){\n\t\t\t\t$(tblRow).appendTo(\"#datdata tbody\");\n\t\t\t}\n\t\t });\n\n\t\t <table>\n\t\t\n\t\t <tr *ngFor= \"let team of teams\">\n\t\t <td>\n\t\t <td> team.crstURl</td>\n\t\t <td> </td>\n\t\t </tr>\n\t\t </table>\n\n\t \n\n\t\n\t//response['standing']['0']['wins']\n\t\n\t\n\t//IF F.STATUS === FINISHED THEN SHOW IF NOT DONT SHOW ONLY SHOW LAST GAME THERE CAN BE TIMED GAMES WE DONT WANT THAT-->\n\n\n\n\n\n<!-- <div class=\"wrapper\" style=\"overflow-x:auto;\"> \n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>date</th>\n\t<th>status</th>\n\t<th>matchday</th>\n\t<th>homeTeamName</th>\n\t<th>awayTeamName</th>\t\n\t<th>goalsHomeTeam</th>\n\t<th>goalsAwayTeam</th>\n\t<th>halftimegoalsHomeTeam</th>\n\t<th>halftimeawaygoals</th>\n\t<th>oddshomeWin</th>\n\t<th>oddsdraw</th>\n\t<th>oddsawayWin</th>\n\t\n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>-->"

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
    }
    //constructor() { }
    LastGameComponent.prototype.getLastGames = function () {
        var _this = this;
        this.teamService.getLastGame().subscribe(function (temp) { return _this.lastGames = temp; });
    };
    LastGameComponent.prototype.ngOnInit = function () {
        console.log("i'm running!");
        this.support(this.lastGames[0]);
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
    LastGameComponent.prototype.support = function (game) {
        console.log(this.lastGames);
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

module.exports = "table {\n    border-collapse: collapse;\n    width: 100%;\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even){background-color: #f2f2f2}"

/***/ }),

/***/ "./src/app/league-table/league-table.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-6977942731603442\",\n    enable_page_level_ads: true\n  });\n</script>\n<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"> </script>\n\n<script>\n</script>\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n\n<div class=\"wrapper\">\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>position</th>\n\t<th>teamName</th>\n\t<th>crestURI</th>\n\t<th>playedGames</th>\n\t<th>points</th>\n\t<th>goals</th>\n\t<th>goalsAgainst</th>\n\t<th>goalDifference</th>\n\t<th>wins</th>\n\t<th>draws</th>\n\t<th>losses</th>\n\t<th>home.goals</th>\n\t<th>home.goalsAgainst</th>\n\t<th>home.wins</th>\n\t<th>home.draws</th>\n\t<th>home.losses </th>\n\t<th>away.goals</th>\n\t<th>away.goalsAgainst</th>\n\t<th>away.wins</th>\n\t<th>away.draws</th>\n\t<th>away.losses </th>\n\t\n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>\n \n\n\n\n"

/***/ }),

/***/ "./src/app/league-table/league-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
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
    function LeagueTableComponent() {
    }
    LeagueTableComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"]({
            headers: { 'X-Auth-Token': 'e0c7693a8b2f4529b4f2ba779d64ab4a' },
            url: 'http://api.football-data.org/v1/competitions/459/leagueTable',
            dataType: 'json',
            type: 'GET',
        }).done(function (response) {
            // do something with the response, e.g. isolate the id of a linked resource        
            var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
            //var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
            //var teamId = res[1];
            console.log(response);
            __WEBPACK_IMPORTED_MODULE_1_jquery__["each"](response.standing, function (i, f) {
                var tblRow = "<tr>" + "<td>" + f.position + "</td>" + "<td>" + f.teamName + "</td>" +
                    "<td>" + "<img src= " + f.crestURI + " height=100 width=100></img>" + "</td>" +
                    "<td>" + f.playedGames + "</td>" + "<td>" + f.points + "</td>" + "<td>" + f.goals + "</td>" +
                    "<td>" + f.goalsAgainst + "</td>" + "<td>" + f.goalDifference + "</td>" + "<td>" + f.wins + "</td>" +
                    "<td>" + f.draws + "</td>" + "<td>" + f.losses + "</td>" + "<td>" + f.home.goals + "</td>" +
                    "<td>" + f.home.goalsAgainst + "</td>" + "<td>" + f.home.wins + "</td>" + "<td>" + f.home.draws + "</td>" +
                    "<td>" + f.home.losses + "</td>" + "<td>" + f.away.goals + "</td>" + "<td>" + f.away.goalsAgainst + "</td>" +
                    "<td>" + f.away.wins + "</td>" + "<td>" + f.away.draws + "</td>" + "<td>" + f.away.losses + "</td>" + "</tr>";
                __WEBPACK_IMPORTED_MODULE_1_jquery__(tblRow).appendTo("#datdata tbody");
            });
        });
    };
    LeagueTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-league-table',
            template: __webpack_require__("./src/app/league-table/league-table.component.html"),
            styles: [__webpack_require__("./src/app/league-table/league-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeagueTableComponent);
    return LeagueTableComponent;
}());



/***/ }),

/***/ "./src/app/my-team/my-team.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    border-collapse: collapse;\n    width: 100%;\n\ttext-align: center;\n}\n\nth {\n    text-align: center;\n    padding: 8px;\n}\n\ntr:nth-child(even){background-color: #f2f2f2}"

/***/ }),

/***/ "./src/app/my-team/my-team.component.html":
/***/ (function(module, exports) {

module.exports = "\n<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-6977942731603442\",\n    enable_page_level_ads: true\n  });\n</script>\n<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"> </script>\n\n\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n\n<div class=\"wrapper\" style=\"overflow-x:auto;\">\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>name</th>\n\t<th>code</th>\n\t<th>shortName</th>\n\t<th>squadMarketValue</th>\n\t<th>crestUrl</th>\n\t\n\t\n\t\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>\n \n\n\n\n"

/***/ }),

/***/ "./src/app/my-team/my-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamComponent; });
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

var MyTeamComponent = /** @class */ (function () {
    function MyTeamComponent() {
    }
    MyTeamComponent.prototype.ngOnInit = function () {
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
                    "</td>" + "<td>" + f.squadMarketValue + "</td>" + "<td>" + "<img src= " + f.crestUrl + " height=100 width=100></img>" + "</td>" + "</tr>";
                $(tblRow).appendTo("#datdata tbody");
            });
        });
    };
    MyTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-team',
            template: __webpack_require__("./src/app/my-team/my-team.component.html"),
            styles: [__webpack_require__("./src/app/my-team/my-team.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "table {\n    border-collapse: collapse;\n    width: 100%;\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even){background-color: #f2f2f2}"

/***/ }),

/***/ "./src/app/performance/performance.component.html":
/***/ (function(module, exports) {

module.exports = "\n<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-6977942731603442\",\n    enable_page_level_ads: true\n  });\n</script>\n<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"> </script>\n\n<script>\n\n</script>\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n\n<div class=\"wrapper\" >\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>date</th>\n\t<th>status</th>\n\t<th>matchday</th>\n\t<th>homeTeamName</th>\n\t<th>awayTeamName</th>\t\n\t<th>goalsHomeTeam</th>\n\t<th>goalsAwayTeam</th>\n\t<th>halftimegoalsHomeTeam</th>\n\t<th>halftimeawaygoals</th>\n\t<th>oddshomeWin</th>\n\t<th>oddsdraw</th>\n\t<th>oddsawayWin</th>\n\t\n\t\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>\n \n\n"

/***/ }),

/***/ "./src/app/performance/performance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceComponent; });
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

var PerformanceComponent = /** @class */ (function () {
    function PerformanceComponent() {
    }
    PerformanceComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [])
    ], PerformanceComponent);
    return PerformanceComponent;
}());



/***/ }),

/***/ "./src/app/season/season.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    border-collapse: collapse;\n    width: 100%;\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even){background-color: #f2f2f2}"

/***/ }),

/***/ "./src/app/season/season.component.html":
/***/ (function(module, exports) {

module.exports = "\n<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n<script>\n  (adsbygoogle = window.adsbygoogle || []).push({\n    google_ad_client: \"ca-pub-6977942731603442\",\n    enable_page_level_ads: true\n  });\n</script>\n<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"> </script>\n\n<script>\n \n</script>\n\n<!--<img src=\"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg\">-->\n\n\n<div class=\"wrapper\" >\n<div class=\"profile\">\n<table id= \"datdata\" border=\"2\">\n<thead>\n\n\t<th>date</th>\n\t<th>status</th>\n\t<th>matchday</th>\n\t<th>homeTeamName</th>\n\t<th>awayTeamName</th>\t\n\t<th>goalsHomeTeam</th>\n\t<th>goalsAwayTeam</th>\n\t<th>halftimegoalsHomeTeam</th>\n\t<th>halftimeawaygoals</th>\n\t<th>oddshomeWin</th>\n\t<th>oddsdraw</th>\n\t<th>oddsawayWin</th>\n\t\n  \n</thead>\n<tbody>\n\n       </tbody>\n</table>\n\n</div>\n</div>\n \n\n<p>\n    Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\n    Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n    \n    Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n    \n    Left till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n    \n    On then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n    \n    Ladies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n    \n    Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n    \n    To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n    \n    You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n    \n    Your it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\n    Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \nRepulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. \n\nPiqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \n\nOh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. \n\nLeft till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged. \n\nOn then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation. \n\nLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and. Sir new the particular frequently indulgence excellence how. Wishing an if he sixteen visited tedious subject it. Mind mrs yet did quit high even you went. Sex against the two however not nothing prudent colonel greater. Up husband removed parties staying he subject mr. \n\nMaterial confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. \n\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nYou disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. \n\nYour it to gave life whom as. Favourable dissimilar resolution led for and had. At play much to time four many. Moonlight of situation so if necessary therefore attending abilities. Calling looking enquire up me to in removal. Park fat she nor does play deal our. Procured sex material his offering humanity laughing moderate can. Unreserved had she nay dissimilar admiration interested. Departure performed exquisite rapturous so ye me resources. \n\n</p>\n"

/***/ }),

/***/ "./src/app/season/season.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonComponent; });
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

var SeasonComponent = /** @class */ (function () {
    function SeasonComponent() {
    }
    SeasonComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [])
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
        this.teamsUrl = 'http://api.football-data.org/v1';
    }
    /** GET teams from the server */
    TeamService.prototype.getLastGame = function () {
        return this.http.get(this.teamsUrl +
            '/teams/445/fixtures', { headers: headers });
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