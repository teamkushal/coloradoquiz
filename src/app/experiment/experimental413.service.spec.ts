import { TestBed } from '@angular/core/testing';

import { Experimental413Service } from './experimental413.service';

describe('Experimental413Service', () => {
  let service: Experimental413Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental413Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
