import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Puzzle03Component} from './puzzle03.component';

describe('PuzzlplantsComponent', () => {
  let component: Puzzle03Component;
  let fixture: ComponentFixture<Puzzle03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzle03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzle03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});