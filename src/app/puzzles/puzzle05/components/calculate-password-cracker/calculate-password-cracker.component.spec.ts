import {ComponentFixture, TestBed} from '@angular/core/testing';

import { CalculatePasswordCrackerComponent } from './calculate-password-cracker.component';

describe('CalculatePasswordCrackerComponent', () => {
  let component: CalculatePasswordCrackerComponent;
  let fixture: ComponentFixture<CalculatePasswordCrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatePasswordCrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePasswordCrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});