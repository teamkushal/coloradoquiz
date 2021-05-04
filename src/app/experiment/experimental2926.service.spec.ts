import { TestBed } from '@angular/core/testing';

import { Experimental2926Service } from './experimental2926.service';

describe('Experimental2926Service', () => {
  let service: Experimental2926Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2926Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
