import { TestBed } from '@angular/core/testing';

import { Experimental2522Service } from './experimental2522.service';

describe('Experimental2522Service', () => {
  let service: Experimental2522Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2522Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
