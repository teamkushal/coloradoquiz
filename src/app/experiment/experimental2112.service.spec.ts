import { TestBed } from '@angular/core/testing';

import { Experimental2112Service } from './experimental2112.service';

describe('Experimental2112Service', () => {
  let service: Experimental2112Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2112Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
