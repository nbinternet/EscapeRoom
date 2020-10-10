import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BotanicstationComponent} from './botanicstation.component';

describe('BotanicstationComponent', () => {
  let component: BotanicstationComponent;
  let fixture: ComponentFixture<BotanicstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotanicstationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotanicstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
