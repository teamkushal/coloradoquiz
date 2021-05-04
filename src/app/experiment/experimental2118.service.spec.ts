import { TestBed } from '@angular/core/testing';

import { Experimental2118Service } from './experimental2118.service';

describe('Experimental2118Service', () => {
  let service: Experimental2118Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2118Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
