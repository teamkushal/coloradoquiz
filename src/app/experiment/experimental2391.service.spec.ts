import { TestBed } from '@angular/core/testing';

import { Experimental2391Service } from './experimental2391.service';

describe('Experimental2391Service', () => {
  let service: Experimental2391Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2391Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
