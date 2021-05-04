import { TestBed } from '@angular/core/testing';

import { Experimental2085Service } from './experimental2085.service';

describe('Experimental2085Service', () => {
  let service: Experimental2085Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2085Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
