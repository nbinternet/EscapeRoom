import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailsService {
  teamName: string = '';
  score: number = 100;

  reset() {
    this.teamName = '';
    this.score = 100;
  }

  public decrementScore() {
    this.score -= 1
  }
}
