import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StenochrouteComponent } from './stenochroute.component';

describe('StenochrouteComponent', () => {
  let component: StenochrouteComponent;
  let fixture: ComponentFixture<StenochrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StenochrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StenochrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
