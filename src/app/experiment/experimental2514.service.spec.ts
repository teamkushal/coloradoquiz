import { TestBed } from '@angular/core/testing';

import { Experimental2514Service } from './experimental2514.service';

describe('Experimental2514Service', () => {
  let service: Experimental2514Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2514Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
