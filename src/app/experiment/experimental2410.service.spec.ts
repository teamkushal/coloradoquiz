import { TestBed } from '@angular/core/testing';

import { Experimental2410Service } from './experimental2410.service';

describe('Experimental2410Service', () => {
  let service: Experimental2410Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2410Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
