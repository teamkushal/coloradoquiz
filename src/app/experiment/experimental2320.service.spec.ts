import { TestBed } from '@angular/core/testing';

import { Experimental2320Service } from './experimental2320.service';

describe('Experimental2320Service', () => {
  let service: Experimental2320Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2320Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
