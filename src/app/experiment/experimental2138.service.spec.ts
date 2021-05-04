import { TestBed } from '@angular/core/testing';

import { Experimental2138Service } from './experimental2138.service';

describe('Experimental2138Service', () => {
  let service: Experimental2138Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2138Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
