import { TestBed } from '@angular/core/testing';

import { Experimental2818Service } from './experimental2818.service';

describe('Experimental2818Service', () => {
  let service: Experimental2818Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2818Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
