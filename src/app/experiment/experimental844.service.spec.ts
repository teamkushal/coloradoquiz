import { TestBed } from '@angular/core/testing';

import { Experimental844Service } from './experimental844.service';

describe('Experimental844Service', () => {
  let service: Experimental844Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental844Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
