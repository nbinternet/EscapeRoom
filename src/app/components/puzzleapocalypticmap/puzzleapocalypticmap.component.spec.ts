import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleapocalypticmapComponent } from './puzzleapocalypticmap.component';

describe('PuzzleapocalypticmapComponent', () => {
  let component: PuzzleapocalypticmapComponent;
  let fixture: ComponentFixture<PuzzleapocalypticmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleapocalypticmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleapocalypticmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
