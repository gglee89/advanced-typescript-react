import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResult } from '../MatchResult';

enum FOOTBALL_FIELDLIST {
  DATE = 0,
  HOME_TEAM = 1,
  AWAY_TEAM = 2,
  HOME_SCORE = 3,
  AWAY_SCORE = 4,
  GAME_RESULT = 5,
  MVP = 6,
}

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run = (matches: MatchData[]): string => {
    let wins: number = 0;

    for (let match of matches) {
      if (
        match[FOOTBALL_FIELDLIST.HOME_TEAM] === this.team &&
        match[FOOTBALL_FIELDLIST.GAME_RESULT] === MatchResult.HomeWin
      ) {
        wins++;
      } else if (
        match[FOOTBALL_FIELDLIST.AWAY_TEAM] === this.team &&
        match[FOOTBALL_FIELDLIST.GAME_RESULT] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  };
}
