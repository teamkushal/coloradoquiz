import { TestBed } from '@angular/core/testing';

import { Experimental2332Service } from './experimental2332.service';

describe('Experimental2332Service', () => {
  let service: Experimental2332Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2332Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
