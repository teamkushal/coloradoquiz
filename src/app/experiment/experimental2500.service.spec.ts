import { TestBed } from '@angular/core/testing';

import { Experimental2500Service } from './experimental2500.service';

describe('Experimental2500Service', () => {
  let service: Experimental2500Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2500Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
