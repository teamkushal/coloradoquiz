import { TestBed } from '@angular/core/testing';

import { Experimental2255Service } from './experimental2255.service';

describe('Experimental2255Service', () => {
  let service: Experimental2255Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2255Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
