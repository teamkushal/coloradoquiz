import { TestBed } from '@angular/core/testing';

import { Experimental3723Service } from './experimental3723.service';

describe('Experimental3723Service', () => {
  let service: Experimental3723Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3723Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
