import { TestBed } from '@angular/core/testing';

import { Experimental2333Service } from './experimental2333.service';

describe('Experimental2333Service', () => {
  let service: Experimental2333Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2333Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
