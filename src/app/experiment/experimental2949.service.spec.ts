import { TestBed } from '@angular/core/testing';

import { Experimental2949Service } from './experimental2949.service';

describe('Experimental2949Service', () => {
  let service: Experimental2949Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2949Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
