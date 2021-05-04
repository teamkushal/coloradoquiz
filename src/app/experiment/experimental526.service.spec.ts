import { TestBed } from '@angular/core/testing';

import { Experimental526Service } from './experimental526.service';

describe('Experimental526Service', () => {
  let service: Experimental526Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental526Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
