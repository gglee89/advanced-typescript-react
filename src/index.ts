import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

enum FOOTBALL_FIELDLIST {
  DATE = 0,
  HOME_TEAM = 1,
  AWAY_TEAM = 2,
  HOME_SCORE = 3,
  AWAY_SCORE = 4,
  GAME_RESULT = 5,
  MVP = 6,
}

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins: number = 0;

for (let match of reader.data) {
  if (
    match[FOOTBALL_FIELDLIST.HOME_TEAM] === 'Man United' &&
    match[FOOTBALL_FIELDLIST.GAME_RESULT] === MatchResult.HomeWin
  ) {
    manUnitedWins++;
  } else if (
    match[FOOTBALL_FIELDLIST.AWAY_TEAM] === 'Man United' &&
    match[FOOTBALL_FIELDLIST.GAME_RESULT] === MatchResult.AwayWin
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times`);
