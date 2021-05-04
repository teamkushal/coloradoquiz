import { TestBed } from '@angular/core/testing';

import { Experimental1633Service } from './experimental1633.service';

describe('Experimental1633Service', () => {
  let service: Experimental1633Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1633Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
