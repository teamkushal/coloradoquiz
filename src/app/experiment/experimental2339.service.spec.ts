import { TestBed } from '@angular/core/testing';

import { Experimental2339Service } from './experimental2339.service';

describe('Experimental2339Service', () => {
  let service: Experimental2339Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2339Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
