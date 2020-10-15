import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";
import {TimerControlService} from "../../services/timer-control.service";
import emailjs from 'emailjs-com';
import {init} from 'emailjs-com';

init("user_nAMpuQU6EByYKD40kpK7C");

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.css']
})
export class EndingComponent implements OnInit {
  teamDetailsService: TeamDetailsService;
  timerControlService: TimerControlService;

  constructor(private _teamDetailsService: TeamDetailsService, private _timerControlService: TimerControlService) {
    this.teamDetailsService = _teamDetailsService;
    this.timerControlService = _timerControlService;
  }

  ngOnInit(): void {
    this.endCounter();
    //this.sendAnEmail();
  }

  private endCounter() {
    this.timerControlService.announcement(this.timerControlService.DO_END);
  }

  calcTime(): string {
    var millis: number = this.timerControlService.getTimeLeft()
    var minutes: number = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + " minutes " + (seconds.length == 1 ? '0' : '') + seconds + " seconds ";
  }

  public sendAnEmail() {
    var templateParams = {
      from_name: this.teamDetailsService.teamName,
      message: 'Team ' + this.teamDetailsService.teamName + 'Escaped, with ' + this.calcTime() + ' left\n' +
        ' timeLeft: ' + this.timerControlService.getTimeLeft()
    };

    emailjs.send('service_19cgk0s', 'template_zo2ucpe', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  }
}
