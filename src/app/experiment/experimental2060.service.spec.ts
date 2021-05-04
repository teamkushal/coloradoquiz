import { TestBed } from '@angular/core/testing';

import { Experimental2060Service } from './experimental2060.service';

describe('Experimental2060Service', () => {
  let service: Experimental2060Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2060Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
