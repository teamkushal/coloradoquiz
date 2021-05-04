import { TestBed } from '@angular/core/testing';

import { Experimental2849Service } from './experimental2849.service';

describe('Experimental2849Service', () => {
  let service: Experimental2849Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2849Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
