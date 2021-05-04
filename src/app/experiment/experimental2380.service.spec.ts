import { TestBed } from '@angular/core/testing';

import { Experimental2380Service } from './experimental2380.service';

describe('Experimental2380Service', () => {
  let service: Experimental2380Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2380Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
