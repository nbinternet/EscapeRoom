import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Puzzle01Component} from './puzzle01.component';

describe('PuzzlplantsComponent', () => {
  let component: Puzzle01Component;
  let fixture: ComponentFixture<Puzzle01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});