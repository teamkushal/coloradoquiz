import { TestBed } from '@angular/core/testing';

import { Experimental3901Service } from './experimental3901.service';

describe('Experimental3901Service', () => {
  let service: Experimental3901Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3901Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
