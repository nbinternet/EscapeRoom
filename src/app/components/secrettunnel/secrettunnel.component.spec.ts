import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecrettunnelComponent } from './secrettunnel.component';

describe('SecrettunnelComponent', () => {
  let component: SecrettunnelComponent;
  let fixture: ComponentFixture<SecrettunnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecrettunnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecrettunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
