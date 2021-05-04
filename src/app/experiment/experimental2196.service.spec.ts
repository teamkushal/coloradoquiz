import { TestBed } from '@angular/core/testing';

import { Experimental2196Service } from './experimental2196.service';

describe('Experimental2196Service', () => {
  let service: Experimental2196Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2196Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
