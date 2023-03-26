import {ComponentFixture, TestBed} from '@angular/core/testing';

import { FindkeyspaceComponent } from './find-keyspace.component';

describe('FindkeyspaceComponent', () => {
  let component: FindkeyspaceComponent;
  let fixture: ComponentFixture<FindkeyspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindkeyspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindkeyspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});