import { TestBed } from '@angular/core/testing';

import { Experimental2821Service } from './experimental2821.service';

describe('Experimental2821Service', () => {
  let service: Experimental2821Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2821Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
