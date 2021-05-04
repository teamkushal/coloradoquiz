import { TestBed } from '@angular/core/testing';

import { Experimental2115Service } from './experimental2115.service';

describe('Experimental2115Service', () => {
  let service: Experimental2115Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2115Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
