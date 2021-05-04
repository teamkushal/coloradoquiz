import { TestBed } from '@angular/core/testing';

import { Experimental3704Service } from './experimental3704.service';

describe('Experimental3704Service', () => {
  let service: Experimental3704Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3704Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
