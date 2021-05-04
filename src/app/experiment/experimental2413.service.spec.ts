import { TestBed } from '@angular/core/testing';

import { Experimental2413Service } from './experimental2413.service';

describe('Experimental2413Service', () => {
  let service: Experimental2413Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2413Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
