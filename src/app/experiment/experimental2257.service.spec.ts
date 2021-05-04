import { TestBed } from '@angular/core/testing';

import { Experimental2257Service } from './experimental2257.service';

describe('Experimental2257Service', () => {
  let service: Experimental2257Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2257Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
