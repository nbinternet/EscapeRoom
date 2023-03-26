import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Puzzle04Component} from './puzzle04.component';

describe('PuzzlplantsComponent', () => {
  let component: Puzzle04Component;
  let fixture: ComponentFixture<Puzzle04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});