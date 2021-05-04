import { TestBed } from '@angular/core/testing';

import { Experimental2345Service } from './experimental2345.service';

describe('Experimental2345Service', () => {
  let service: Experimental2345Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2345Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
