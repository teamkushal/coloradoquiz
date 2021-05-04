import { TestBed } from '@angular/core/testing';

import { Experimental2474Service } from './experimental2474.service';

describe('Experimental2474Service', () => {
  let service: Experimental2474Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2474Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
