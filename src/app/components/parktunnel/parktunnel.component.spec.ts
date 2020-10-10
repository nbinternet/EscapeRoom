import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ParktunnelComponent} from './parktunnel.component';

describe('ParktunnelComponent', () => {
  let component: ParktunnelComponent;
  let fixture: ComponentFixture<ParktunnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParktunnelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParktunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
