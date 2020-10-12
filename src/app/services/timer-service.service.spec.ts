import {TestBed} from '@angular/core/testing';

import {TimerControlService} from './timer-control.service';

describe('TimerServiceService', () => {
  let service: TimerControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
