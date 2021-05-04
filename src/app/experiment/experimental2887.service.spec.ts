import { TestBed } from '@angular/core/testing';

import { Experimental2887Service } from './experimental2887.service';

describe('Experimental2887Service', () => {
  let service: Experimental2887Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2887Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
