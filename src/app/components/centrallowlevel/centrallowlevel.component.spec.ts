import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrallowlevelComponent } from './centrallowlevel.component';

describe('CentrallowlevelComponent', () => {
  let component: CentrallowlevelComponent;
  let fixture: ComponentFixture<CentrallowlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrallowlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrallowlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
