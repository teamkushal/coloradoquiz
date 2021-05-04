import { TestBed } from '@angular/core/testing';

import { Experimental2528Service } from './experimental2528.service';

describe('Experimental2528Service', () => {
  let service: Experimental2528Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2528Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
