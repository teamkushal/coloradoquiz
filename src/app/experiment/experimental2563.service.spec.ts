import { TestBed } from '@angular/core/testing';

import { Experimental2563Service } from './experimental2563.service';

describe('Experimental2563Service', () => {
  let service: Experimental2563Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2563Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
