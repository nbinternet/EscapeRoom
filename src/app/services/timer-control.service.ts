import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerControlService {

  // Observable string sources
  private timerController = new Subject<string>();

  // Observable string streams
  announcement$ = this.timerController.asObservable();

  constructor() {
  }

  // Service message commands
  announceStart(startText: string) {
    this.timerController.next(startText);
  }
}
