import { TestBed } from '@angular/core/testing';

import { Experimental2901Service } from './experimental2901.service';

describe('Experimental2901Service', () => {
  let service: Experimental2901Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2901Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
