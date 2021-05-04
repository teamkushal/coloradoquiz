import { TestBed } from '@angular/core/testing';

import { Experimental126Service } from './experimental126.service';

describe('Experimental126Service', () => {
  let service: Experimental126Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental126Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
