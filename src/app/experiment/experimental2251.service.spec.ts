import { TestBed } from '@angular/core/testing';

import { Experimental2251Service } from './experimental2251.service';

describe('Experimental2251Service', () => {
  let service: Experimental2251Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2251Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
