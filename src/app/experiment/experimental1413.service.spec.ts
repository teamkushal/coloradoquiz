import { TestBed } from '@angular/core/testing';

import { Experimental1413Service } from './experimental1413.service';

describe('Experimental1413Service', () => {
  let service: Experimental1413Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1413Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
