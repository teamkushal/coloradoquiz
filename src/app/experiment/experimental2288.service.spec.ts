import { TestBed } from '@angular/core/testing';

import { Experimental2288Service } from './experimental2288.service';

describe('Experimental2288Service', () => {
  let service: Experimental2288Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2288Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
