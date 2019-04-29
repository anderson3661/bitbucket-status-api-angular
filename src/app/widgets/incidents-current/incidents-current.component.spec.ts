import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsCurrentComponent } from './incidents-current.component';

describe('IncidentsCurrentComponent', () => {
  let component: IncidentsCurrentComponent;
  let fixture: ComponentFixture<IncidentsCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentsCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
