import { TestBed } from '@angular/core/testing';

import { Experimental2148Service } from './experimental2148.service';

describe('Experimental2148Service', () => {
  let service: Experimental2148Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2148Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
