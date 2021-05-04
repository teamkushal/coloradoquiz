import { TestBed } from '@angular/core/testing';

import { Experimental2450Service } from './experimental2450.service';

describe('Experimental2450Service', () => {
  let service: Experimental2450Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2450Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
