import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetcontentComponent } from './timesheetcontent.component';

describe('TimesheetcontentComponent', () => {
  let component: TimesheetcontentComponent;
  let fixture: ComponentFixture<TimesheetcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimesheetcontentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TimesheetcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
