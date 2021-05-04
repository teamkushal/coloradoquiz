import { TestBed } from '@angular/core/testing';

import { Experimental2784Service } from './experimental2784.service';

describe('Experimental2784Service', () => {
  let service: Experimental2784Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2784Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
