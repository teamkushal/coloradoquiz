import { TestBed } from '@angular/core/testing';

import { Experimental2591Service } from './experimental2591.service';

describe('Experimental2591Service', () => {
  let service: Experimental2591Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2591Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
