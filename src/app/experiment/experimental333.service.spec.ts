import { TestBed } from '@angular/core/testing';

import { Experimental333Service } from './experimental333.service';

describe('Experimental333Service', () => {
  let service: Experimental333Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental333Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
