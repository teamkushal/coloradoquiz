import { TestBed } from '@angular/core/testing';

import { Experimental2268Service } from './experimental2268.service';

describe('Experimental2268Service', () => {
  let service: Experimental2268Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2268Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
