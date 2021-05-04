import { TestBed } from '@angular/core/testing';

import { Experimental131Service } from './experimental131.service';

describe('Experimental131Service', () => {
  let service: Experimental131Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental131Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
