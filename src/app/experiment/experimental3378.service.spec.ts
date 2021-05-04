import { TestBed } from '@angular/core/testing';

import { Experimental3378Service } from './experimental3378.service';

describe('Experimental3378Service', () => {
  let service: Experimental3378Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3378Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
