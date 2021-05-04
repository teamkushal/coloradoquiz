import { TestBed } from '@angular/core/testing';

import { Experimental704Service } from './experimental704.service';

describe('Experimental704Service', () => {
  let service: Experimental704Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental704Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
