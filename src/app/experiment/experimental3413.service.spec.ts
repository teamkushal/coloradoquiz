import { TestBed } from '@angular/core/testing';

import { Experimental3413Service } from './experimental3413.service';

describe('Experimental3413Service', () => {
  let service: Experimental3413Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3413Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
