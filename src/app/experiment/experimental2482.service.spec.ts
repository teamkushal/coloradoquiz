import { TestBed } from '@angular/core/testing';

import { Experimental2482Service } from './experimental2482.service';

describe('Experimental2482Service', () => {
  let service: Experimental2482Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2482Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
