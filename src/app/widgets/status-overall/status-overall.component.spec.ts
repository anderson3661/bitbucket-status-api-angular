import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOverallComponent } from './status-overall.component';

describe('StatusOverallComponent', () => {
  let component: StatusOverallComponent;
  let fixture: ComponentFixture<StatusOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusOverallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
