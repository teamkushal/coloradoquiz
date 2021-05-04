import { TestBed } from '@angular/core/testing';

import { Experimental2337Service } from './experimental2337.service';

describe('Experimental2337Service', () => {
  let service: Experimental2337Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2337Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
