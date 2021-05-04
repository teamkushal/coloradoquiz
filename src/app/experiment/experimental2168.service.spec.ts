import { TestBed } from '@angular/core/testing';

import { Experimental2168Service } from './experimental2168.service';

describe('Experimental2168Service', () => {
  let service: Experimental2168Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2168Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
