import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerControlService {
  public DO_START: string = "START";
  public DO_END: string = "END";

  private timeInMillis: number = 0;
  // Observable string sources
  private timerController = new Subject<string>();
  // Observable string streams
  announcement$ = this.timerController.asObservable();

  constructor() {
  }

  // Service message commands
  announcement(startText: string) {
    this.timerController.next(startText);
  }

  update(millis: number) {
    this.timeInMillis = millis;
  }
}
