import { TestBed } from '@angular/core/testing';

import { Experimental2156Service } from './experimental2156.service';

describe('Experimental2156Service', () => {
  let service: Experimental2156Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2156Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
