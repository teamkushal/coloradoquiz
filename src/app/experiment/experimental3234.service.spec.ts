import { TestBed } from '@angular/core/testing';

import { Experimental3234Service } from './experimental3234.service';

describe('Experimental3234Service', () => {
  let service: Experimental3234Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3234Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
