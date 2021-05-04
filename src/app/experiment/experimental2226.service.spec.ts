import { TestBed } from '@angular/core/testing';

import { Experimental2226Service } from './experimental2226.service';

describe('Experimental2226Service', () => {
  let service: Experimental2226Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2226Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
