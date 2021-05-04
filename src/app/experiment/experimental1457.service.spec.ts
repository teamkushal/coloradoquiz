import { TestBed } from '@angular/core/testing';

import { Experimental1457Service } from './experimental1457.service';

describe('Experimental1457Service', () => {
  let service: Experimental1457Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1457Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
