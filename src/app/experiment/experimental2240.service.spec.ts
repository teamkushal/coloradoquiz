import { TestBed } from '@angular/core/testing';

import { Experimental2240Service } from './experimental2240.service';

describe('Experimental2240Service', () => {
  let service: Experimental2240Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2240Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
