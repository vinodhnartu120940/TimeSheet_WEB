import { TestBed } from '@angular/core/testing';

import { TimesheetServiceService } from './timesheet-service.service';

describe('TimesheetServiceService', () => {
  let service: TimesheetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimesheetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
