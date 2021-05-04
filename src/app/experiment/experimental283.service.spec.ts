import { TestBed } from '@angular/core/testing';

import { Experimental283Service } from './experimental283.service';

describe('Experimental283Service', () => {
  let service: Experimental283Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental283Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
