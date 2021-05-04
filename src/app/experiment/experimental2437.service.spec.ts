import { TestBed } from '@angular/core/testing';

import { Experimental2437Service } from './experimental2437.service';

describe('Experimental2437Service', () => {
  let service: Experimental2437Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2437Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
