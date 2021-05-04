import { TestBed } from '@angular/core/testing';

import { Experimental2724Service } from './experimental2724.service';

describe('Experimental2724Service', () => {
  let service: Experimental2724Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2724Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
