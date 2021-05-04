import { TestBed } from '@angular/core/testing';

import { Experimental2709Service } from './experimental2709.service';

describe('Experimental2709Service', () => {
  let service: Experimental2709Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2709Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
