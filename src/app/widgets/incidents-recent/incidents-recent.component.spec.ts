import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsRecentComponent } from './incidents-recent.component';

describe('IncidentsRecentComponent', () => {
  let component: IncidentsRecentComponent;
  let fixture: ComponentFixture<IncidentsRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentsRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
