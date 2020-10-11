import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SciencecenterComponent} from './sciencecenter.component';

describe('SciencecenterComponent', () => {
  let component: SciencecenterComponent;
  let fixture: ComponentFixture<SciencecenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SciencecenterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
