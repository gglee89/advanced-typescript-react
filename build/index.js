"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var FOOTBALL_FIELDLIST;
(function (FOOTBALL_FIELDLIST) {
    FOOTBALL_FIELDLIST[FOOTBALL_FIELDLIST["DATE"] = 0] = "DATE";
    FOOTBALL_FIELDLIST[FOOTBALL_FIELDLIST["HOME_TEAM"] = 1] = "HOME_TEAM";
    FOOTBALL_FIELDLIST[FOOTBALL_FIELDLIST["AWAY_TEAM"] = 2] = "AWAY_TEAM";
    FOOTBALL_FIELDLIST[FOOTBALL_FIELDLIST["HOME_SCORE"] = 3] = "HOME_SCORE";
    FOOTBALL_FIELDLIST[FOOTBALL_FIELDLIST["AWAY_SCORE"] = 4] = "AWAY_SCORE";
    FOOTBALL_FIELDLIST[FOOTBALL_FIELDLIST["GAME_RESULT"] = 5] = "GAME_RESULT";
    FOOTBALL_FIELDLIST[FOOTBALL_FIELDLIST["MVP"] = 6] = "MVP";
})(FOOTBALL_FIELDLIST || (FOOTBALL_FIELDLIST = {}));
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[FOOTBALL_FIELDLIST.HOME_TEAM] === 'Man United' &&
        match[FOOTBALL_FIELDLIST.GAME_RESULT] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[FOOTBALL_FIELDLIST.AWAY_TEAM] === 'Man United' &&
        match[FOOTBALL_FIELDLIST.GAME_RESULT] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " times");
