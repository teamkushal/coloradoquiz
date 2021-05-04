import { TestBed } from '@angular/core/testing';

import { Experimental2736Service } from './experimental2736.service';

describe('Experimental2736Service', () => {
  let service: Experimental2736Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2736Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
