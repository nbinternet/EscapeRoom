import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Puzzle02Component} from './puzzle02.component';

describe('PuzzlplantsComponent', () => {
  let component: Puzzle02Component;
  let fixture: ComponentFixture<Puzzle02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});