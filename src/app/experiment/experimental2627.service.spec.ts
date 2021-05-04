import { TestBed } from '@angular/core/testing';

import { Experimental2627Service } from './experimental2627.service';

describe('Experimental2627Service', () => {
  let service: Experimental2627Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2627Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
