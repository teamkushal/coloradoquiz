import { TestBed } from '@angular/core/testing';

import { Experimental3672Service } from './experimental3672.service';

describe('Experimental3672Service', () => {
  let service: Experimental3672Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3672Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
