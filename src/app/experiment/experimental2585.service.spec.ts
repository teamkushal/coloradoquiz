import { TestBed } from '@angular/core/testing';

import { Experimental2585Service } from './experimental2585.service';

describe('Experimental2585Service', () => {
  let service: Experimental2585Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2585Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
